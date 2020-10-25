defmodule EulerElixir.Problem1 do

  def sum_of_multiples(less_than: max) do
    0..(max - 1)
      |> Enum.filter(&valid_number?/1)
      |> Enum.sum
  end

  defp valid_number?(number) do
    divisible?(number, 3) || divisible?(number, 5)
  end

  defp divisible?(number, by) do
    rem(number, by) == 0
  end

end
