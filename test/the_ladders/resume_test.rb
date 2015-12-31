require "test_helper"

class ResumeTest < Minitest::Test
  include TheLadders

  def test_can_determine_owner
    job_seeker = JobSeeker.new
    resume = Resume.new(owner: job_seeker)

    assert resume.owned_by?(job_seeker)
  end

  def test_can_determine_non_owner
    job_seeker = JobSeeker.new
    other_job_seeker = JobSeeker.new
    resume = Resume.new(owner: job_seeker)

    refute resume.owned_by?(other_job_seeker)
  end

end
