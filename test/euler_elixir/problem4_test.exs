defmodule Problem4Test do
  use ExUnit.Case

  test "can identify palindromic numbers" do
    assert EulerElixir.Problem4.palindromic?(9009)
  end

  test "can identify non-palindromic numbers" do
    refute EulerElixir.Problem4.palindromic?(9019)
  end

  test "can find largest product of 2 digit numbers" do
    assert 9009 == EulerElixir.Problem4.largest_palindrome_product(digit_count: 2)
  end

  test "can find largest product of 3 digit numbers" do
    assert 906609 == EulerElixir.Problem4.largest_palindrome_product(digit_count: 3)
  end

end