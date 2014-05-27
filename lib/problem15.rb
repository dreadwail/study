module Problem15

  def num_lattice_routes(n)
    values = []
    values[0] = (0..n).map { 1 }
    (1..n).each do |y|
      (0..n).each do |x|
        values[y] ||= []
        values[y][x] = values[y-1][0..x].inject(:+)
      end
    end
    values.last.last
  end

end
