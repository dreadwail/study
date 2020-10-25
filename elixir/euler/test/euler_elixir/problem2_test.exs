defmodule EulerElixir.Problem2Test do
  use ExUnit.Case
  doctest EulerElixir.Problem2

  test "can find first 10 fibs" do
    fibs = for n <- 1..10, do: EulerElixir.Problem2.fib_of(n)
    assert fibs == [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
  end

  test "can find sum of even fibs less than 100" do
    assert 44 == EulerElixir.Problem2.sum_even_fibs(max: 100)
  end

  test "can find the sum of even fibs less than 4 million" do
    assert 4613732 == EulerElixir.Problem2.sum_even_fibs(max: 4000000)
  end

end