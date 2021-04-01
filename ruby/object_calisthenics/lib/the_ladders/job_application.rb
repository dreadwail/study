module TheLadders
  class JobApplication

    def apply_to(job)
      job.validate_application(self)
      save unless errors?
    end

  end
end
