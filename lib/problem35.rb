require "stdlib"

module Problem35

  def num_circular_primes(range)
    range.select(&:circular_prime?).length
  end

end
