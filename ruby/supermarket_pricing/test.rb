require "minitest"
require "minitest/autorun"

require_relative "./can_of_beans"
require_relative "./bean_pack"

class Test < Minitest::Test

  def test_can_of_beans_costs_65_cents
    can = CanOfBeans.new
    assert_equal 0.65, can.cost
  end

  def test_two_cans_of_beans_costs_130_cents
    pack = BeanPack.new
    pack.add(CanOfBeans.new)
    pack.add(CanOfBeans.new)
    assert_equal 1.30, pack.cost
  end

  def test_bean_pack_of_one_costs_65_cents
    pack = BeanPack.new
    pack.add(CanOfBeans.new)
    assert_equal 0.65, pack.cost
  end

  def test_three_cans_costs_1_dollar
    bean_pack = BeanPack.new
    bean_pack.add(CanOfBeans.new)
    bean_pack.add(CanOfBeans.new)
    bean_pack.add(CanOfBeans.new)
    
    assert_equal 1.00, bean_pack.cost
  end

  def test_five_cans_costs_230_cents
    bean_pack = BeanPack.new
    bean_pack.add(CanOfBeans.new)
    bean_pack.add(CanOfBeans.new)
    bean_pack.add(CanOfBeans.new)
    bean_pack.add(CanOfBeans.new)
    bean_pack.add(CanOfBeans.new)
    
    assert_equal 2.30, bean_pack.cost
  end

end
