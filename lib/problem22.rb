require "stdlib"

module Problem22

  def name_scores(names)
    sorted = names.map { |name| name.downcase }
    scores = []
    sorted.each_with_index.map do |name, idx|
      val = name.alphabetical_value
      scores << val * (idx+1)
    end
    scores
  end



end
