class Float
  
  def mantissa
    to_s.split(".").last.to_i
  end

end
