module TheLadders
  class Resume

    def initialize(owner:)
      @owner = owner
    end

    def owned_by?(job_seeker)
      @owner == job_seeker
    end

  end
end
