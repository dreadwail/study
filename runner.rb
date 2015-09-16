# encoding: UTF-8

require "./anagrams"

anagrams = Anagrams.new('wordlist.txt')

puts anagrams.for(ARGV[0])
puts anagrams.for('tree')
puts anagrams.for('food')
