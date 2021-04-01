Gem::Specification.new do |spec|

  spec.name = "dreadwail_soccer"
  spec.version = "2.0.0"
  spec.summary = "Rank soccer games in a league."
  spec.description = <<-EOF 
    In this league, a draw (tie) is worth 1 point and a win is worth 3 points. 
    A loss is worth 0 points. If two or more teams have the same number of 
    points, they should have the same rank and be printed in alphabetical 
    order.
  EOF

  spec.authors = ["Dreadwail"]
  spec.email = "dreadwail42@gmail.com"
  spec.homepage = "https://github.com/substantial-jobs/dreadwail"
  
  spec.add_development_dependency "minitest", "~> 5.0"
  spec.files = [
    "lib/dreadwail_soccer.rb",
    "lib/dreadwail_soccer/season.rb"
  ]
  spec.bindir = "bin"
  spec.executables << "dreadwail_soccer"
  spec.test_files = [
    "test/dreadwail_soccer/test_season.rb"
  ]

end
