class Pair

  attr_reader :first, :second

  def initialize(first, second)
    @first = first
    @second = second
  end

  def ==(other)
    return false if other.nil?
    return false if other.class != self.class
    @first == other.first && @second == other.second
  end

  def inspect
    to_s
  end

  def to_s
    "#{first} + #{second} => #{first}#{second}"
  end

end
