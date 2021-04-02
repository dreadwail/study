class Version

  MAX_IDENTIFIER = 9

  def initialize(version)
    @version = version
  end

  def next
    next_identifiers = identifiers.dup
    apply_value(next_identifiers, 1)
    self.class.new(next_identifiers.join("."))
  end

  def to_s
    @version
  end

  private

  def apply_value(new_identifiers, value)
    index = new_identifiers.length - 1
    carry = 1

    while index >= 0 && carry > 0
      value = new_identifiers[index] + carry
      if index > 0
        carry = calculate_carry(value)
        value = 0 if carry > 0
      end
      new_identifiers[index] = value
      index -= 1
    end
  end

  def calculate_carry(value)
    [0, value - MAX_IDENTIFIER].max
  end

  def identifiers
    @identifiers ||= version
      .split(".")
      .map(&:to_i)
  end

  attr_reader :version

end
