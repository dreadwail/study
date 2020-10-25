defmodule EulerElixir.Problem3Test do
  use ExUnit.Case
  doctest EulerElixir.Problem3

  test "can find largest prime factor of 13195" do
    assert 29 == EulerElixir.Problem3.largest_prime_factor(13195)
  end

  test "can find largest prime factor of 600851475143" do
    assert 6857 == EulerElixir.Problem3.largest_prime_factor(600851475143)
  end

end
