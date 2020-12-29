class StringCalculator

  attr_reader :result

  def initialize
    @result = 0
  end

  def add(values, delimiters: [","])
    @result += values
      .split(/#{delimiters.join("|")}/)
      .map(&:to_i)
      .inject(:+) || 0
  end

end
