module DreadwailSoccer
  class Season

    class Team

      attr_accessor :name
      attr_accessor :points
      attr_accessor :differential

      def initialize(name)
        @name = name
        @differential = 0
        @points = 0
      end

      def tied?(other_team)
        @differential == other_team.differential && @points == other_team.points
      end
      
    end

    WIN_POINTS = 3
    TIE_POINTS = 1
    LOSS_POINTS = 0

    attr_accessor :scores

    def initialize
      @scores = Hash.new
    end

    def record_game(game)

      team1, team2 = game.split(",").map(&:strip).map(&:split)

      team1_points = team1.pop.to_i
      team1_name = team1.join(' ')
      team2_points = team2.pop.to_i
      team2_name = team2.join(' ')

      ensure_known(team1_name, team2_name)

      if team1_points < team2_points
        @scores[team2_name].points += WIN_POINTS
      elsif team1_points > team2_points
        @scores[team1_name].points += WIN_POINTS
      else
        @scores[team1_name].points += TIE_POINTS
        @scores[team2_name].points += TIE_POINTS
      end

      team1_differential = team1_points - team2_points
      team2_differential = team2_points - team1_points

      @scores[team1_name].differential += team1_differential
      @scores[team2_name].differential += team2_differential

    end

    def to_s
      standings = ""
      previous_rank = 1
      previous_team = nil
      ranked_teams.each_with_index do |(name, team), rank|
        rank += 1
        rank = previous_rank if previous_team && team.tied?(previous_team)
        points_suffix = team.points == 1 ? "pt" : "pts"
        standings += "#{rank}. #{name}, #{team.points} #{points_suffix}\n"
        previous_team = team
      end
      standings
    end

    private

    def ensure_known(*team_names)
      team_names.each do |name|
        @scores[name] ||= Team.new(name)
      end
    end

    def ranked_teams
      @scores.sort_by {|name, team| [-1 * team.points, -1 * team.differential, name]}
    end

  end
end
