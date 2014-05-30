require "stdlib"

module Problem36

  def sum_of_palindromes_in_bases(range, *bases)
    range
      .select { |n| bases.all? { |b| n.to_s(b).palindrome? } }
      .inject(:+)
  end

end
