class Rule

  attr_reader :quantity, :price_per_chunk, :sku

  def initialize(sku, quantity, price_per_chunk)
    @sku = sku
    @quantity = quantity
    @price_per_chunk = price_per_chunk
  end

end
