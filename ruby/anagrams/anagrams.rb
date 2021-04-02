# encoding: UTF-8

require "set"

class Anagrams

  def initialize(filename)
    @anagrams = Hash.new { Set.new }
    File.open(filename, "r:UTF-8") do |f|
      f.each_line do |line|
        word = line.chomp
        key = hash_key(word)
        @anagrams[key] = @anagrams[key] + [word]
      end
    end
  end

  def for(word)
    (@anagrams[hash_key(word)] + [word]).to_a
  end

  private

  def hash_key(word)
    word.downcase.chars.sort.join
  end

end
