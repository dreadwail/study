require "stdlib"

module Problem21

  def amicable?(a)
    a_factors = a.factors.inject(:+)
    return false if a_factors.nil?
    b = a_factors - a
    return false if a == b
    b_factors = b.factors.inject(:+)
    return false if b_factors.nil?
    b_factors - b == a
  end

  def sum_of_amicable_to(n)
    (1..n)
      .select { |n| amicable?(n) }
      .inject(:+)
  end

end
