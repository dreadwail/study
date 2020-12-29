ENV["EULER_ENV"] ||= "test"

require "rubygems"
require "bundler"
Bundler.setup(ENV["EULER_ENV"])

require "minitest/autorun"
require "minitest/pride"

lib_path = File.join(File.expand_path(File.dirname(__FILE__)), "..", "lib")
$: << lib_path unless $:.include? lib_path

require "euler"
