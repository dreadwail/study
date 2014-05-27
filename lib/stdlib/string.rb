class String

  def alphabetical_value
    base_val = "a".ord - 1
    self
      .split('')
      .map { |c| c.ord - base_val }
      .inject(:+)
  end

end
