require "no_conditionals/version"
require "byebug"

module NoConditionals

  def self.common_letters(words)
    words
      .map(&:chars)
      .map(&:to_set)
      .inject(&:&)
      .to_a
  end

  def self.make_change(item_cost, amount_tendered)
    denominations = Set.new([100, 25, 10, 5, 1])
    change = (amount_tendered * 100).to_i - (item_cost * 100).to_i

    answer = {}

    hash_to_use = Hash.new(answer)
    hash_to_use[0] = {}

    denominations.inject(change) do |change, denomination|
      count = change / denomination
      hash_to_use[count][denomination] = count
      change = change % denomination
    end

    answer
  end

  def self.fizz_buzz(n)
    threes = { 0 => "Fizz" }
    fives = { 0 => "Buzz" }
    answer_for = ->(number) { "#{threes[number % 3]}#{fives[number % 5]}" }

    (1..n).inject({}) do |answers, number|
      answers.merge({ number => answer_for.call(number) })
    end
  end

end
