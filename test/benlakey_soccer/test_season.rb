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
  end

  def test_loss_awards_zero_points
  end

  def test_points_tie_makes_same_rank
  end

  def test_points_tie_orders_tied_alphabetical
  end

end

