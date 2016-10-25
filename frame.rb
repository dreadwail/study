class Frame

  PIN_COUNT = 10
  MAX_ROLLS = 2

  attr_accessor :rolls
  attr_reader :next_frame

  def initialize(next_frame = nil)
    @rolls = []
    @next_frame = next_frame
  end

  def strike?
    all_pins_down? && roll_count == 1
  end

  def spare?
    all_pins_down? && maxed_rolls?
  end

  def open?
    !closed?
  end

  def closed?
    all_pins_down? || maxed_rolls?
  end

  def score
    tally = pins_down_count
    return tally if next_frame.nil?

    if strike?
      tally += next_frame.pins_down_count
    elsif spare?
      tally += next_frame.rolls.first
    end

    tally
  end

  def pins_down_count
    @rolls.inject(0, :+)
  end

  private

  def all_pins_down?
    pins_down_count == PIN_COUNT
  end

  def maxed_rolls?
    roll_count == MAX_ROLLS
  end

  def roll_count
    @rolls.length
  end

end

