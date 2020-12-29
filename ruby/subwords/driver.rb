require "./subwords"
require "pp"

dictionary = Dictionary.new("wordlist.txt")

if ARGV[0]
  pp dictionary.all_sub_words[ARGV[0]]
else
  pp dictionary.all_sub_words
end
