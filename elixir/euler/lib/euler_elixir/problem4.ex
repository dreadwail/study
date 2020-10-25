defmodule EulerElixir.Problem4 do

  def palindromic?(number) do
    digits = Integer.digits(number, 10)
    digits == Enum.reverse(digits)
  end

  def largest_palindrome_product(digit_count: digit_count) do
    numbers = (max_for_digits(digit_count)..1)

    (for a <- numbers, b <- numbers, palindromic?(a * b), do: a * b, into: MapSet.new)
      |> Enum.max
  end

  defp max_for_digits(count) do
    (:math.pow(10, count) |> round) - 1
  end
  
end