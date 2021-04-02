require "byebug"


class Team

  def initialize(line)
    @line = line
  end

  def name
    @line.split[1]
  end

  def diff
    (for_score - against_score).abs
  end

  private

  def for_score
    @line.split[6].to_i
  end

  def against_score
    @line.split[8].to_i
  end

end




class Teams

  def initialize(filename)
    @filename = filename
  end

  def smallest_diff_team
    gather_teams.min { |a, b| a.diff - b.diff }.name
  end

  #private

  def gather_teams
    File.readlines(@filename)
      .select { |line| line.split.length == 10 }
      .map { |line| Team.new(line) }
  end

end




require "minitest"
require "minitest/autorun"
require "minitest/pride"

class Test < Minitest::Test

  def setup
    @teams = Teams.new('football.dat')
  end

  def test_can_find_smallest_difference
    assert_equal 'Aston_Villa', @teams.smallest_diff_team
  end

  def test_gather_teams_finds_20_teams
    assert_equal 20, @teams.gather_teams.length
  end

  def test_team_name_can_be_parsed
    assert_equal "Arsenal", @teams.gather_teams.first.name
  end

  def test_team_diff_can_be_parsed
    assert_equal 43, @teams.gather_teams.first.diff
  end

  def test_team_diff_can_be_parsed_with_fewer_for_than_against
    assert_equal 34, @teams.gather_teams.last.diff
  end

end
