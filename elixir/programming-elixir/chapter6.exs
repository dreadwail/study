defmodule Chapter6 do

  def guess(answer, min..max) do
    suspect = (min + div(max - min, 2))
    IO.puts "Is it #{suspect}"
    guess(answer, min..max, suspect)
  end

  def guess(answer, _.._, suspect) when suspect == answer do
    IO.puts answer
  end

  def guess(answer, _..max, suspect) when suspect < answer do
    guess(answer, suspect..max)
  end

  def guess(answer, min.._, suspect) when suspect > answer do
    guess(answer, min..suspect)
  end

end
