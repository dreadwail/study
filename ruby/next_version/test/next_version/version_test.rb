require "test_helper"

class VersionTest < Minitest::Test

  def test_version_can_be_to_s
    assert_equal "1.0.0", Version.new("1.0.0").to_s
  end

  def test_semver_patch_increment
    assert_equal "1.2.4", Version.new("1.2.3").next.to_s
  end

  def test_cascading_identifiers
    assert_equal "1.0.0", Version.new("0.9.9").next.to_s
  end

  def test_single_digit
    assert_equal "2", Version.new("1").next.to_s
  end

  def test_really_long
    assert_equal "1.2.3.4.5.6.7.9", Version.new("1.2.3.4.5.6.7.8").next.to_s
  end

  def test_two_identifier_over_max_cascade
    assert_equal "10.0", Version.new("9.9").next.to_s
  end

end
