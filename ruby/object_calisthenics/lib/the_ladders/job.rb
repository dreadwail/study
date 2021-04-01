module TheLadders
  class Job

    def initialize(title:, employer:)
      @title = title
      @employer = employer
      @applicants = []
    end

    def posted_by?(employer)
      @employer == employer
    end

    def apply(application)
      unless resume.owned_by?(job_seeker)
        raise ArgumentError, "Cannot apply with someone elses resume"
      end
      @applicants << job_seeker
    end

    def applied?(job_seeker)
      @applicants.include?(job_seeker)
    end

  end
end
