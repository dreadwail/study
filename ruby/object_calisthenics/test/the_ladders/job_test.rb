require "test_helper"

class JobTest < Minitest::Test
  include TheLadders

  def test_can_determine_if_posted_by_particular_employer
    initech = Employer.new(name: "Initech")
    job = Job.new(title: "Software Developer", employer: initech)

    assert job.posted_by?(initech)
  end

  def test_job_seekers_can_apply
    job_seeker = JobSeeker.new
    resume = Resume.new(owner: job_seeker)

    initech_job = Job.new(title: "Software Developer", employer: initech)
    initech_job.apply(job_seeker, resume)

    assert initech_job.applied?(job_seeker)
  end

  def test_job_seekers_cannot_apply_with_someone_else_resume
    job_seeker = JobSeeker.new
    resume = Resume.new(owner: job_seeker)
    other_job_seeker = JobSeeker.new

    initech_job = Job.new(title: "Software Developer", employer: initech)
    captured_exception = assert_raises(ArgumentError) { initech_job.apply(other_job_seeker, resume) }
    assert_equal "Cannot apply with someone elses resume", captured_exception.message
  end

  private

  def initech
    @initech ||= Employer.new(name: "Initech")
  end

end
