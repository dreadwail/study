require "prime"

module Euler

  def largest_prime_factor(number)
    Prime.prime_division(number).max.first
  end

end
