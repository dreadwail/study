require "rake"
require "rake/testtask"

Rake::TestTask.new do |t|
  t.libs << "test"
  t.test_files = FileList["test/euler/*_test.rb"]
  t.verbose = true
end
