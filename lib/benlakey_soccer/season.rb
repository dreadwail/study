module BenLakeySoccer
  class Season

    WIN_POINTS = 3
    TIE_POINTS = 1
    LOSS_POINTS = 0

    attr_accessor :scores

    def initialize
      @scores = Hash.new(LOSS_POINTS)
    end

    def record_game(game)

      team1, team2 = game.split(",").map(&:strip).map(&:split)

      team1_points = team1.pop
      team1_name = team1.join(' ')
      team2_points = team2.pop
      team2_name = team2.join(' ')

      if team1_points < team2_points
        @scores[team2_name] += WIN_POINTS
      elsif team1_points > team2_points
        @scores[team1_name] += WIN_POINTS
      else
        @scores[team1_name] += TIE_POINTS
        @scores[team2_name] += TIE_POINTS
      end

    end

  end
end
