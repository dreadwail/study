module Problem9

  def pythagorean_triplet_summing_to(sum)
    (1..sum).each do |a|
      (1..(sum - a)).each do |b|
        c = Math.sqrt((a**2) + (b**2))
        if c % 1 == 0 && a+b+c == sum && pythagorean_triplet?(a,b,c.to_i)
          return [a,b,c]
        end
      end
    end
    []
  end

  def pythagorean_triplet?(a, b, c)
    (a**2) + (b**2) == (c**2)
  end

end
