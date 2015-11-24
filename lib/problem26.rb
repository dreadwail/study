require "stdlib"

module Euler

  def longest_fraction_repeater(range)

    nums_to_bigdecs = {}

    range.each do |i| 
      nums_to_bigdecs[i] = BigDecimal.new("1.0") / BigDecimal.new(i)
    end


    nums_to_mantissas = {}
    nums_to_bigdecs.each do |num, bigdec|
      nums_to_mantissas[num] = bigdec.split[1].to_s
    end


    nums_to_answers = {}
    nums_to_mantissas.each do |num, mantissa| 
      ans = longest_repeat(mantissa)
      nums_to_answers[num] = ans unless ans.nil?
    end


    nums_to_answers.max_by { |k, v| v }[0]
  end

  def longest_repeat(mantissa)
    mantissa = mantissa.to_s
    things = (0..mantissa.length).inject([]) do |memo_i, i|
      (1..mantissa.length - i).inject(memo_i) do |memo_j,j|
        memo_j << mantissa[i,j]
      end
    end.select do |sub| 
      repeated_in(sub, mantissa)
    end
    return nil if things.empty?
    things = things.select do |t|
      t.chars.uniq.length != 1
    end.uniq
    things.min_by do |t|
      t.length
    end.to_i
  end

  def repeated_in(suspect, against)
    against.to_s.include?(suspect.to_s * 2)
  end

end
