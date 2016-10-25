class Frame

  PIN_COUNT = 10

  attr_accessor :rolls

  def initialize
    @rolls = []
  end

  def open?
    !closed?
  end

  def closed?
    pins_down_count == PIN_COUNT || @rolls.length == 2
  end

  def pins_down_count
    @rolls.inject(:+)
  end

  def pins_up_count
    PIN_COUNT - pins_down_count
  end

end

