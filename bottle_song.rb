class BottleSong

  def initialize
  end

  def verse(n)
    case n
      when 0 then zero_verse
      else standard_verse(n)
    end
  end

  private

  def standard_verse(n)
    [
      "#{bottle_count(n)} of beer on the wall, #{bottle_count(n)} of beer.",
      "Take one down and pass it around, #{bottle_count(n - 1)} of beer on the wall."
    ].join("\n")
  end

  def zero_verse
    [
      "No more bottles of beer on the wall, no more bottles of beer.",
      "Go to the store and buy some more, 99 bottles of beer on the wall."
    ].join("\n")
  end

  def bottle_count(n)
    return "no more bottles" if n == 0
    return "1 bottle" if n == 1
    "#{n} bottles"
  end

  def plural_char(n)
    n != 1 ? "s" : ""
  end

end