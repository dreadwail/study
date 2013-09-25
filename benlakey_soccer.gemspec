Gem::Specification.new do |spec|

  spec.name = "benlakey_soccer"
  spec.version = "1.0.0"
  spec.summary = "Rank soccer games in a league."
  spec.description = <<-EOF 
    In this league, a draw (tie) is worth 1 point and a win is worth 3 points. 
    A loss is worth 0 points. If two or more teams have the same number of 
    points, they should have the same rank and be printed in alphabetical 
    order.
  EOF

  spec.authors = ["Ben Lakey"]
  spec.email = "benlakey@gmail.com"
  spec.homepage = "https://github.com/substantial-jobs/benlakey"
  
  spec.add_development_dependency "minitest", "~> 5.0"
  spec.files = [
    "lib/benlakey_soccer.rb"
  ]
  spec.bindir = "bin"
  spec.executables << "benlakey_soccer"
  spec.test_files = [
    "test/test_benlakey_soccer.rb"
  ]

end
