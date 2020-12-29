require "byebug"

class Checkout

  PRICES = {
    "A" => 50,
    "B" => 30,
    "C" => 20,
    "D" => 15
  }

  def initialize(rules)
    @rules = rules
    @skus = []
  end

  def scan(sku)
    @skus << sku
  end

  def total
    total = 0
    skus_remaining = @skus.dup

    @rules.each do |rule|
      total += apply_rule(rule, skus_remaining)
    end

    skus_remaining.each do |sku|
      total += PRICES[sku]
    end
    total
  end

  private

  def apply_rule(rule, skus_remaining)
    interim_total = 0
    found_skus = find_skus(skus_remaining, rule.sku)
    return 0 if found_skus.length < rule.quantity

    times_to_apply = found_skus.length / rule.quantity

    times_to_apply.times do
      interim_total += rule.price_per_chunk
      remove_skus(skus_remaining, rule.sku, rule.quantity)
    end
    interim_total
  end

  def find_skus(skus, sku)
    skus.select { |s| s == sku }
  end

  def remove_skus(skus, sku, how_many)
    how_many.times do
      index = skus.index(sku)
      skus.delete_at(index)
    end
  end

end
