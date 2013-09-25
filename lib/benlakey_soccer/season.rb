module BenLakeySoccer
  class Season

    WIN_POINTS = 3
    TIE_POINTS = 1
    LOSS_POINTS = 0

    attr_accessor :scores

    def initialize
      @scores = Hash.new
    end

    def record_game(game)

      team1, team2 = game.split(",").map(&:strip).map(&:split)

      team1_points = team1.pop
      team1_name = team1.join(' ')
      team2_points = team2.pop
      team2_name = team2.join(' ')

      ensure_known(team1_name, team2_name)

      if team1_points < team2_points
        @scores[team2_name] += WIN_POINTS
      elsif team1_points > team2_points
        @scores[team1_name] += WIN_POINTS
      else
        @scores[team1_name] += TIE_POINTS
        @scores[team2_name] += TIE_POINTS
      end

    end

    def to_s
      standings = ""
      previous_rank = 1
      previous_points = nil
      ranked_teams.each_with_index do |(name, points), rank|
        rank += 1
        rank = previous_rank if previous_points == points
        points_suffix = points == 1 ? "pt" : "pts"
        standings += "#{rank}. #{name}, #{points} #{points_suffix}\n"
        previous_points = points
        previous_rank = rank
      end
      standings
    end

    private
    def ensure_known(*team_names)
      team_names.each do |name|
        @scores[name] = @scores.fetch(name, 0)
      end
    end

    def ranked_teams
      @scores.sort_by {|name, points| [-1 * points, name]}
    end

  end
end
