require "test_helper"

class JobSeekerTest < Minitest::Test
  include TheLadders

  def test_job_seekers_can_save_jobs_onsite_for_later_viewing
    job_seeker = JobSeeker.new
    job_seeker.save(initech_job)

    assert job_seeker.saved?(initech_job)
  end

  private

  def initech_job
    @initech_job ||= begin
      Job.new(title: "Software Developer", employer: initech)
    end
  end

  def initech
    @initech ||= Employer.new(name: "Initech")
  end

end
