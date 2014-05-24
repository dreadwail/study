module Problem48

  def sum_self_powers(range)
    range
      .map { |n| n**n }
      .inject(:+)
  end

end
