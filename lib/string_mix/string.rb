module StringMix

  refine String do

    def lower_case?
      ('a'..'z').include?(self)
    end

    def mix(string2)
      out = {}

      string1_counts = self.char_counts
      string2_counts = string2.char_counts

      ('a'..'z').each do |char|
        char_count_string_1 = string1_counts[char].to_i
        char_count_string_2 = string2_counts[char].to_i

        if char_count_string_1 == 0 || char_count_string_2 == 0
          next
        elsif char_count_string_1 > char_count_string_2
          out[char_count_string_1] = "1:#{char * char_count_string_1}"
        elsif char_count_string_1 < char_count_string_2
          out[char_count_string_2] = "2:#{char * char_count_string_2}"
        else
          out[char_count_string_1] = "=:#{char * char_count_string_1}"
        end
      end
      
      out.sort_by { |count, out| -count }.to_h.values.join("/")
    end

    def char_counts
      self.each_char
        .select { |s| s.lower_case? }
        .inject(Hash.new(0)) { |counts, char|
          counts[char] += 1
          counts
        }.sort_by { |char, count| -count }.to_h
    end

  end

end

