module TheLadders
  class JreqJob < Job

    def initialize(title:, employer:)
      super
    end

    def apply(job_seeker, resume = nil)
      if resume.nil?
        raise ArgumentError, "Jreq jobs require a resume to apply"
      end
      super
    end

  end
end
