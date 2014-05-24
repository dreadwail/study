module Problem29

  def distinct_powers(min, max)
    ans = []
    (min..max).each do |n|
      (min..max).each do |pow|
        ans << n ** pow
      end
    end
    ans.sort.uniq
  end

end
