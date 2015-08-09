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

  ROMAN_VALUES = ROMAN_NUMERALS.dup.invert

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

end
