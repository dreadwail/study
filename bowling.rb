require_relative "./frame"

class Game

  def initialize
    @frames = Array.new(10) { Frame.new }
    @frame_index = 0
  end

  def roll(pins)
    frame = @frames[@frame_index]
    frame.rolls << pins
    if frame.closed?
      @frame_index += 1
    end
  end

  def score
    @frames
      .flat_map(&:rolls)
      .inject(:+)
  end

end
