class BeanPack
  
  def add(can)
    @cans ||= []
    cans << can
  end

  def cost
    dollars = cans.length / 3
    singles = cans.length % 3
    (dollars * 1.00) + (singles * 0.65)
  end

  private

  attr_reader :cans

end

