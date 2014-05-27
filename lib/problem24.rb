module Problem24

  def nth_lexicographic_permutation(str, num)
    str.split('').permutation.to_a[num-1].join
  end

end
