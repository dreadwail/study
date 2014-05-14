require "prime"

module Problem7

  def prime_at(n)
    Prime.take(n).last
  end

end
