defmodule EulerElixir.Problem3 do

  def largest_prime_factor(number) do
    identify_factors(number, 2)
      |> Enum.max
  end

  def identify_factors(number, divisor) do
    identify_factors(number, divisor, [])
  end

  def identify_factors(number, divisor, factors) when divisor > number do
    factors
  end

  def identify_factors(number, divisor, factors) when rem(number, divisor) != 0 do
    identify_factors(number, divisor + 1, factors)
  end

  def identify_factors(number, divisor, factors) when rem(number, divisor) == 0 do
    identify_factors(div(number, divisor), divisor, [divisor | factors])
  end

end