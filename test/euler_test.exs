defmodule EulerTest do
  use ExUnit.Case
  doctest Euler

  test "problem1 - can find sum of multiples below 10" do
    sum = Euler.Problem1.sum_of_multiples(less_than: 10)
    assert sum == 23
  end
end
