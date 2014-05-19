require "prime"

module Problem10

  def sum_of_primes(max)
    Prime.each(ubound = max, generator = Prime::EratosthenesGenerator.new).inject(:+)
  end

end
