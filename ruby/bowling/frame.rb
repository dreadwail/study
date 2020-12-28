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

    rolls_to_consume = if strike?
                         2
                       elsif spare?
                         1
                       else
                         0
                       end

    future_rolls = next_n_rolls(rolls_to_consume)
    tally + future_rolls.inject(0, :+)
  end

  def pins_down_count
    rolls.inject(0, :+)
  end

  private

  def next_n_rolls(n_to_take)
    to_take_from = next_frame
    results = []
    while to_take_from && results.length < n_to_take
      taken = to_take_from.rolls.take(n_to_take)
      results += taken
      n_to_take -= taken.length
      to_take_from = to_take_from.next_frame
    end
    results
  end

  def all_pins_down?
    pins_down_count == PIN_COUNT
  end

  def maxed_rolls?
    roll_count == MAX_ROLLS
  end

  def roll_count
    rolls.length
  end

end

