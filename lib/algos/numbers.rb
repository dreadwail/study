module Algos
  module Numbers

    ROMAN_NUMERALS = {
      1    => "I",
      4    => "IV",
      5    => "V",
      9    => "IX",
      10   => "X", 
      40   => "XL",
      50   => "L",
      90   => "XC",
      100  => "C", 
      400  => "CD",
      500  => "D",
      900  => "CM",
      1000 => "M"
    }

    def self.romanize(number)
      numerals = ""
      ROMAN_NUMERALS.reverse_each do |value, numeral|
        how_many = number / value
        numerals += (numeral * how_many)
        number -= (value * how_many)
      end
      numerals
    end

    def self.dec2bin(str)
      return nil if !str || str == ""
      num = str.to_i
      bin = ""
      while num > 0
        bin = (num % 2).to_s + bin
        num /= 2
      end
      bin
    end

    def self.bin2dec(str)
      return nil if !str || str == ""
      place = 1
      sum = 0
      (str.length-1).downto(0) do |i|
        digit = str[i].to_i
        sum += (place * digit)
        place *= 2
      end
      sum.to_s
    end

  end
end
