require "test_helper"

class JreqJobTest < Minitest::Test
  include TheLadders

  def test_resume_required_to_apply
    job_seeker = JobSeeker.new
    initech_job = JreqJob.new(title: "Software Developer", employer: initech)

    captured_exception = assert_raises(ArgumentError) { initech_job.apply(job_seeker) }
    assert_equal "Jreq jobs require a resume to apply", captured_exception.message
  end

  private

  def initech
    @initech ||= Employer.new(name: "Initech")
  end

end
