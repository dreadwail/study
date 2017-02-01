class BottleSong

  def verse(n)
    return final_verse if n == 0
    standard_verse(n)
  end

  def to_s
    99.downto(0).map { |n| verse(n) }.join("\n")
  end

  private

  def standard_verse(n)
    [
      verse_part_one(n),
      verse_part_two(n)
    ].join("\n")
  end

  def verse_part_one(n)
    "#{bottle_count_phrases[n]} of beer on the wall, #{bottle_count_phrases[n]} of beer."
  end

  def verse_part_two(n)
    "Take one down and pass it around, #{bottle_count_phrases[n - 1]} of beer on the wall."
  end

  def final_verse
    [
      "No more bottles of beer on the wall, no more bottles of beer.",
      "Go to the store and buy some more, 99 bottles of beer on the wall."
    ].join("\n")
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