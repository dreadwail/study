require "stdlib"

module Problem12

  KNOWN_SUM_TO = {}

  def triangle_number(n)
    sum = 0
    n.downto(0) do |i|
      if KNOWN_SUM_TO[i]
        sum += KNOWN_SUM_TO[i]
        break
      end
      sum += i
    end
    KNOWN_SUM_TO[n] = sum
    sum
  end

  def first_triangle_number_with_factor_count(count)
    value = 0
    n = 0
    while(value.factors.length < count)
      value = triangle_number(n)
      n += 1
    end
    value
  end

end
