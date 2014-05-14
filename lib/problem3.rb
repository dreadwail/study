require "prime"

class Fixnum

  def largest_prime_factor
    Prime.prime_division(self).max.first
  end

end
