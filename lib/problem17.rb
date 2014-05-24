require "stdlib"

module Problem17

  def num_chars_in_num_words(range)
    range
      .map { |n| n.to_words }
      .join
      .delete(' ')
      .length
  end

end
