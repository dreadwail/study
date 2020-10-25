defmodule EulerElixir.Problem2 do

  def fib_of(0), do: 1
  def fib_of(1), do: 1
  def fib_of(n), do: fib_of(n - 1) + fib_of(n - 2)

  def sum_even_fibs(max: max) do
    Stream.iterate(1, &(&1 + 1))
      |> Stream.map(&fib_of/1)
      |> Stream.filter(&(rem(&1, 2) == 0))
      |> Stream.take_while(&(&1 < max))
      |> Enum.sum
  end

end
