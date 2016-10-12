require_relative "./frame"

class Game

  def initialize
    @frames = []
    @frame_number = 0
  end

  def roll(pins)
    frame = @frames[@frame_number] || Frame.new
    frame.rolls << pins
    @frames[@frame_number] = frame
    if pins == 10 || frame.rolls.length == 2
      @frame_number += 1
    end
  end

  def score
    @frames
      .flat_map(&:rolls)
      .inject(:+)
  end

end
