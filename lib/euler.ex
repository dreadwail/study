defmodule Euler do
  defmodule Problem1 do

    def sum_of_multiples(less_than: max) do
      range = 0..(max - 1)
      divisible_by_3 = &(rem(&1, 3) == 0)
      divisible_by_5 = &(rem(&1, 5) == 0)
      multiple? = &(divisible_by_3.(&1) || divisible_by_5.(&1))

      Enum.filter(range, multiple?)
        |> Enum.sum
    end

  end
end
