class BottleSong

  def verse(n)
    [
      verse_part_one(n),
      verse_part_two(n)
    ].map(&:capitalize).join("\n")
  end

  def to_s
    99.downto(0).map { |n| verse(n) }.join("\n")
  end

  private

  def verse_part_one(n)
    "#{bottle_count_phrases[n]} of beer on the wall, #{bottle_count_phrases[n]} of beer."
  end

  def verse_part_two(n)
    return "Go to the store and buy some more, 99 bottles of beer on the wall." if n == 0
    "Take one down and pass it around, #{bottle_count_phrases[n - 1]} of beer on the wall."
  end

  def bottle_count_phrases
    {
      0 => "no more bottles",
      1 => "1 bottle"
    }.tap do |counts|
      counts.default_proc = proc { |_, bottle_count| "#{bottle_count} bottles" }
    end
  end

end