require "stdlib"

module Problem23

  def sum_uncomposable_by_two_abundants(range)
    abundants = range.select(&:abundant?)

    answer = Hash[range.map {|n| [n, true]}]

    abundants.each do |a|
      abundants.each do |b|
        answer[a+b] = false
      end
    end
    answer.select { |k,v| v }.keys.inject(:+)
  end

end
