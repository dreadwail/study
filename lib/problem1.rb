require "range"

module Problem1

  def sum_multiples_of_3_or_5(range)
    range.multiples_of_any(3, 5).inject(:+)
  end

end
