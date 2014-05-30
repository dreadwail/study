require "prime"

class Fixnum

  ONES_WORDS = {
    1 => "one",
    2 => "two",
    3 => "three",
    4 => "four",
    5 => "five",
    6 => "six",
    7 => "seven",
    8 => "eight",
    9 => "nine"
  }

  TEENS_WORDS = {
    10 => "ten",
    11 => "eleven",
    12 => "twelve",
    13 => "thirteen",
    14 => "fourteen",
    15 => "fifteen",
    16 => "sixteen",
    17 => "seventeen",
    18 => "eighteen",
    19 => "nineteen",
  }

  TENS_WORDS = {
    2 => "twenty",
    3 => "thirty",
    4 => "forty",
    5 => "fifty",
    6 => "sixty",
    7 => "seventy",
    8 => "eighty",
    9 => "ninety"
  }

  HUNDRED = "hundred"
  THOUSAND = "thousand"

  def to_words
    out = to_words_impl
    out
  end

  def to_words_impl

    return ONES_WORDS[self] if self < 10
    return TEENS_WORDS[self] if (10...20).include?(self)

    n = self
    out = ""

    num_thousands = n / 1000
    n -= (num_thousands * 1000)
    out += "#{ONES_WORDS[num_thousands]} thousand" if num_thousands > 0

    num_hundreds = n / 100
    n -= (num_hundreds * 100)
    out += " #{ONES_WORDS[num_hundreds]} hundred" if num_hundreds > 0
    out.strip!

    if (10...20).include?(n)
      out += " and " if out.length > 0
      out += TEENS_WORDS[n]
      out.strip!
      return out
    end

    num_tens = n / 10
    n -= (num_tens * 10)
    if num_tens > 1
      out += " and " if out.length > 0
      out += TENS_WORDS[num_tens]
      out.strip!
    end

    num_ones = n / 1

    if num_ones > 0
      if num_tens > 0
        out += " "
      else
        out += " and " if out.length > 0
      end
      out += ONES_WORDS[num_ones]
      out.strip!
    end

    out
  end

  def largest_prime_factor
    Prime.prime_division(self).max.first
  end

  FACTORS = Hash.new do |hash, key|
    if key == 0
      hash[key] = []
    elsif key == 1
      hash[key] = [key]
    else
      hash[key] = calculate_factors(key)
    end
  end

  def factors
    FACTORS[self]
  end

  # I admit I copied this from http://stackoverflow.com/questions/3398159/all-factors-of-a-given-number
  # I'm bad at math :(
  def self.calculate_factors(number)
    primes, powers = number.prime_division.transpose
    exponents = powers.map { |i| (0..i).to_a }
    divisors = exponents.shift.product(*exponents).map do |powers|
      primes.zip(powers).map { |prime, power| prime ** power }.inject(:*)
    end
    divisors.flat_map { |div| [div, number / div] }.sort.uniq
  end

  def digits
    to_s.chars.map { |c| c.to_i }
  end

  FACTORIAL = { 1 => 1 }

  def factorial
    return 1 if self == 0
    return self if self.abs < 2
    if FACTORIAL[self].nil?
      (2..self).each do |n| 
        FACTORIAL[n] ||= n * FACTORIAL[n-1]
      end
    end
    FACTORIAL[self]
  end

end

