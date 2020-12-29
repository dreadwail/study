require "set"
require "./pair"

class Dictionary

  def initialize(filename)
    @words = Set.new
    File.open(filename, "r:UTF-8") do |f|
      f.each_line do |line|
        word = line.chomp
        @words << word
      end
    end
  end

  def all_sub_words
    six_letter_words = find_six_letter_words
    hash = {}
    six_letter_words.each do |word|
      pairs = find_pairs(word)
      hash[word] = pairs unless pairs.empty?
    end
    hash
  end

  def find_pairs(word)
    pairs = []
    (0..word.length).each do |index|
      first = word[0..index]
      second = word[(index+1)...word.length]
      if is_word?(first) && is_word?(second)
        pairs << Pair.new(first, second)
      end
    end
    pairs.sort_by { |p| p.first }
  end

  def is_word?(word)
    @words.include?(word)
  end

  def find_six_letter_words
    @words.select { |w| w.length == 6 }
  end

end
