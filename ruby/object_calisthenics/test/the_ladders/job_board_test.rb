require "test_helper"

class JobBoardTest < Minitest::Test
  include TheLadders

  def test_employers_can_post_jobs
    job_board = JobBoard.new
    job_board.post(initech_job)

    job_results = job_board.posted_by(initech)

    assert job_results.include?(initech_job)
  end

  def test_employers_can_see_a_listing_of_only_jobs_they_posted
    job_board = JobBoard.new
    job_board.post(initech_job)
    job_board.post(initrode_job)

    job_results = job_board.posted_by(initech)

    refute job_results.include?(initrode_job)
  end

  private

  def initech_job
    @initech_job ||= begin
      Job.new(title: "Software Developer", employer: initech)
    end
  end

  def initrode_job
    @initrode_job ||= begin
      Job.new(title: "Software Developer", employer: initrode)
    end
  end

  def initech
    @initech ||= Employer.new(name: "Initech")
  end

  def initrode
    @initrode ||= Employer.new(name: "Initrode")
  end

end
