class Throttle

  DEFAULT_TIMEOUT = 24.hours
  DEFAULT_LIMIT = 2

  attr_reader :key, :limit, :timeout

  private_class_method :new

  def initialize(key, limit, timeout)
    @key = key
    @limit = limit || DEFAULT_LIMIT
    @timeout = timeout || DEFAULT_TIMEOUT
  end

  def self.perform(key, limit: DEFAULT_LIMIT, timeout: DEFAULT_TIMEOUT, &block)
    new(key, limit, timeout).perform(&block)
  end

  def perform(&block)
    unless throttled?
      yield
      touch
    end
  end

  def throttled?
    used >= limit
  end

  private

  def touch
    Rails.cache.write(key, used + 1, expires_in: timeout)
  end

  def used
    Rails.cache.fetch(key, expires_in: timeout) { 0 } || 0
  end

end
