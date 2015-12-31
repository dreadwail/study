module TheLadders
  class Job

    def initialize(title:, employer:)
      @title = title
      @employer = employer
    end

    def posted_by?(employer)
      @employer == employer
    end

  end
end
