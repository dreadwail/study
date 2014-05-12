require "prime"

module Euler

  def prime_at(n)
    Prime.first(n).last
  end

end
