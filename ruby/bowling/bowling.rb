require_relative "./frame"

class Game

  FRAME_COUNT = 10

  def initialize
    tail_frame = Frame.new

    FRAME_COUNT.times { tail_frame = Frame.new(tail_frame) }

    @head_frame = tail_frame
    @current_frame = tail_frame
  end

  def roll(pins)
    @current_frame.rolls << pins
    if @current_frame.closed?
      @current_frame = @current_frame.next_frame
    end
  end

  def score
    frames
      .flat_map(&:score)
      .inject(0, :+)
  end

  def frames
    list = []
    this_frame = @head_frame
    while this_frame
      list << this_frame
      this_frame = this_frame.next_frame
    end
    list
  end

end
