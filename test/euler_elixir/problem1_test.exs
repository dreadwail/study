defmodule EulerTest do
  use ExUnit.Case
  doctest EulerElixir.Problem1

  test "can find sum of multiples below 10" do
    sum = EulerElixir.Problem1.sum_of_multiples(less_than: 10)
    assert sum == 23
  end

  test "can find sum of multiples below 1000" do
    sum = EulerElixir.Problem1.sum_of_multiples(less_than: 1000)
    assert sum == 233168
  end

end
