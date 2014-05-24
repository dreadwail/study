require "ice_cube"

module Problem19

  def number_of_sundays_on_first_of_months(start, finish)
    schedule = IceCube::Schedule.new(Date.new(0)) do |s|
      s.add_recurrence_rule IceCube::Rule.monthly.day_of_month(1).day(:sunday)
    end
    schedule.occurrences_between(start, finish).length
  end

end
