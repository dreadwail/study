module Algos
  module Numbers

    # TODO: doesnt handle 4 == IV style numerals yet
    def self.romanize(number)
      numerals = ""

      cees = number / 100
      numerals += "C" * cees
      number -= (cees * 100)

      ells = number / 50
      numerals += "L" * ells
      number -= (ells * 50)

      exes = number / 10
      numerals += "X" * exes
      number -= (exes * 10)

      vees = number / 5
      numerals += "V" * vees
      number -= (vees * 5)

      eyes = number % 5
      numerals += "I" * eyes

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
