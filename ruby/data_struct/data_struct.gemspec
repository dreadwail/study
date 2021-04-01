$:.push File.expand_path("../lib", __FILE__)

require "data_struct"

Gem::Specification.new do |s|

  s.name = "data_struct"
  s.version = DataStruct::VERSION
  s.summary = "This is a collection of data structures I wrote in ruby as a study guide."
  s.description = "This is a collection of data structures I wrote in ruby as a study guide. Some of them already exist in the ruby core lib but that's not why I wrote it. To keep sharp on computer science fundamentals and languages I often write these."

  s.authors = ["Dreadwail"]
  s.email = "dreadwail42@gmail.com"
  s.homepage = "https://github.com/dreadwail/study/tree/master/ruby/data_struct"
  s.license = "MIT"

  s.files         = `git ls-files`.split("\n")
  s.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }

end
