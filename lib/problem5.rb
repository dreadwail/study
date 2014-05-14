class Range

  def smallest_divisible_by_all
    candidate = last
    candidate += last until all? { |i| candidate % i == 0 }
    candidate
  end

end
