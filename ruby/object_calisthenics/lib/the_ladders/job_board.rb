module TheLadders
  class JobBoard

    def initialize
      @jobs = []
    end

    def post(job)
      @jobs << job
    end

    def posted_by(employer)
      @jobs.select { |j| j.posted_by?(employer) }
    end

  end
end
