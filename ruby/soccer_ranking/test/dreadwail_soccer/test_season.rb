require "minitest/autorun"
require "dreadwail_soccer"

class TestSeason < Minitest::Test
  include DreadwailSoccer

  def setup
    @season = Season.new
  end

  def test_tied_points_sorts_by_aggregate_differential
    @season.record_game("Foo 3, Baz 1")
    @season.record_game("Bar 3, Baz 2")
    expected = <<-eos
1. Foo, 3 pts
2. Bar, 3 pts
3. Baz, 0 pts
eos
    assert_equal expected, @season.to_s
  end

  def test_draw_awards_one_point
    @season.record_game("Foo 3, Bar 3")
    assert_equal 1, @season.scores["Foo"].points
    assert_equal 1, @season.scores["Bar"].points
  end

  def test_spaces_in_name_handled
    @season.record_game("Foo Bar 2, Baz 1")
    assert_equal 3, @season.scores["Foo Bar"].points
  end

  def test_win_awards_three_points
    @season.record_game("Foo 42, Bar 11")
    assert_equal 3, @season.scores["Foo"].points
  end

  def test_multiple_records_aggregate_existing_scores
    @season.record_game("Foo 2, Bar 1")
    @season.record_game("Foo 3, Bar 2")
    assert_equal 6, @season.scores["Foo"].points
  end

  def test_loss_awards_zero_points
    @season.record_game("Foo 9, Bar 2")
    @season.record_game("Foo 1, Bar 2")
    assert_equal 3, @season.scores["Foo"].points
  end

  def test_points_tie_makes_same_rank_ordered_alphabetical
    @season.record_game("Foo 1, Bar 1")
    expected = <<-eos
1. Bar, 1 pt
1. Foo, 1 pt
eos
    assert_equal expected, @season.to_s
  end

  def test_points_tie_with_same_rank_doesnt_affect_subsequent_rank
    @season.record_game("Foo 2, Bar 1")
    @season.record_game("Baz 3, Buz 1")
    expected = <<-eos
1. Baz, 3 pts
2. Foo, 3 pts
3. Bar, 0 pts
4. Buz, 0 pts
eos
    assert_equal expected, @season.to_s
  end

  def test_pluralization_is_appropriate_for_points
    @season.record_game("Foo 2, Bar 1")
    @season.record_game("Baz 1, Buz 1")
    expected = <<-eos
1. Foo, 3 pts
2. Baz, 1 pt
2. Buz, 1 pt
4. Bar, 0 pts
eos
    assert_equal expected, @season.to_s
  end

  def test_instructions_sample_data
    INSTRUCTIONS_SAMPLE_INPUT.split("\n").each do |game|
      @season.record_game(game)
    end
    assert_equal INSTRUCTIONS_SAMPLE_OUTPUT, @season.to_s
  end

  INSTRUCTIONS_SAMPLE_INPUT = <<-EOF
Lions 3, Snakes 3
Tarantulas 1, FC Awesome 0
Lions 1, FC Awesome 1
Tarantulas 3, Snakes 1
Lions 4, Grouches 0
  EOF

  INSTRUCTIONS_SAMPLE_OUTPUT = <<-EOF
1. Tarantulas, 6 pts
2. Lions, 5 pts
3. FC Awesome, 1 pt
4. Snakes, 1 pt
5. Grouches, 0 pts
  EOF

end

