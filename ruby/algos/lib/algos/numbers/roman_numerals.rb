class Fixnum

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

  def to_roman_numerals
    number = self
    numerals = ""
    ROMAN_NUMERALS.reverse_each do |value, numeral|
      how_many = number / value
      numerals += (numeral * how_many)
      number -= (value * how_many)
    end
    numerals
  end

  def self.deromanize(numerals)
    value = 0
    last_value = 0
    numerals.reverse.each_char do |ch|
      value_here = ROMAN_VALUES[ch]
      if value_here >= last_value
        value += value_here
      else
        value -= value_here
      end
      last_value = value_here
    end
    value
  end

end
