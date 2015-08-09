class Fixnum

  def bit_count
    return 0 if nil?
    n = self
    bits = 0
    while n > 0
      bits += 1 if n % 2 == 1
      n /= 2
    end
    bits
  end

end
