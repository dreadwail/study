module TheLadders
  class JobSeeker

    def initialize
      @saved_jobs = []
    end

    def save(job)
      @saved_jobs << job
    end

    def saved?(job)
      @saved_jobs.include?(job)
    end

  end
end
