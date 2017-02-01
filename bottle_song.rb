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
      "#{n} bottles of beer on the wall, #{n} bottles of beer.",
      "Take one down and pass it around, #{n - 1} bottles of beer on the wall."
    ].join("\n")
  end

  def zero_verse
    [
      "No more bottles of beer on the wall, no more bottles of beer.",
      "Go to the store and buy some more, 99 bottles of beer on the wall."
    ].join("\n")
  end

end