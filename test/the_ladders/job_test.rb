require "test_helper"

class JobTest < Minitest::Test
  include TheLadders

  def test_can_determine_if_posted_by_particular_employer
    initech = Employer.new(name: "Initech")
    job = Job.new(title: "Software Developer", employer: initech)

    assert job.posted_by?(initech)
  end

end
