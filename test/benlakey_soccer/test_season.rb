require "minitest/autorun"
require "benlakey_soccer"

class TestSeason < Minitest::Test
  include BenLakeySoccer

  def setup
    @season = Season.new
  end

  def test_draw_awards_one_point
    @season.record_game("Foo 3, Bar 3")
    assert_equal 1, @season.scores["Foo"]
    assert_equal 1, @season.scores["Bar"]
  end

  def test_spaces_in_name_handled
    @season.record_game("Foo Bar 2, Baz 1")
    assert_equal 3, @season.scores["Foo Bar"]
  end

  def test_win_awards_three_points
    @season.record_game("Foo 42, Bar 11")
    assert_equal 3, @season.scores["Foo"]
  end

  def test_multiple_records_aggregate_existing_scores
    @season.record_game("Foo 2, Bar 1")
    @season.record_game("Foo 3, Bar 2")
    assert_equal 6, @season.scores["Foo"]
  end

  def test_loss_awards_zero_points
    @season.record_game("Foo 9, Bar 2")
    @season.record_game("Foo 1, Bar 2")
    assert_equal 3, @season.scores["Foo"]
  end

  def test_points_tie_makes_same_rank
  end

  def test_points_tie_orders_tied_alphabetical
  end

  def test_points_tie_with_same_rank_doesnt_affect_subsequent_rank
  end

end

