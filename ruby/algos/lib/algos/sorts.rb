module Algos
  module Sorts

    def self.shell_sort(data)
      return nil if !data
      answer = data.dup
      gap = 1
      gap = (gap * 3 + 1) while gap < (answer.length / 3)
      while gap >= 1
        gap.upto(answer.length - 1) do |i|
          mover_index = i
          destination_index = i - gap
          while answer[mover_index] < answer[destination_index] && mover_index >= gap
            answer[mover_index],answer[destination_index] = answer[destination_index],answer[mover_index]
            mover_index = destination_index
            destination_index = destination_index - gap
          end
        end
        gap /= 3
      end
      answer
    end

    def self.selection_sort(data)
      return nil if !data
      answer = data.dup
      0.upto(answer.length - 1) do |left_index|
        smallest_index = left_index
        left_index.upto(answer.length - 1) do |i|
          if answer[i] <= answer[smallest_index]
            smallest_index = i
          end
        end
        answer[left_index],answer[smallest_index] = answer[smallest_index],answer[left_index]
      end
      answer
    end

    def self.quick_sort(data)
      return nil if !data
      answer = data.dup
      quick_sort_recursive(answer)
      answer 
    end

    def self.quick_sort_recursive(data, min_index = 0, max_index = (data.length - 1))
      return if min_index >= max_index
      partition_index = partition(data, min_index, max_index)
      quick_sort_recursive(data, min_index, partition_index - 1)
      quick_sort_recursive(data, partition_index + 1, max_index)
    end

    def self.partition(data, min_index, max_index)

      partition_value = data[min_index]
      left_index = min_index + 1
      right_index = max_index
      
      while true
        while left_index <= max_index
          break if data[left_index] > partition_value
          left_index += 1
        end
        while right_index >= (min_index + 1)
          break if data[right_index] < partition_value
          right_index -= 1
        end
        break if left_index >= right_index
        data[left_index],data[right_index] = data[right_index],data[left_index]
      end

      data[min_index],data[right_index] = data[right_index],data[min_index]
      right_index

    end

    def self.merge_sort(data)
      return nil if !data
      answer = data.dup
      step = 1
      while(step < answer.length)
        0.step(answer.length - step - 1, step*2) do |low|
          mid = low + step - 1
          high = [mid + step, answer.length - 1].min
          merge(answer, [], low, mid, high)
        end
        step *= 2
      end
      answer
    end

    def self.merge(data, aux, low, mid, high)

      (low..high).each do |i|
        aux[i] = data[i]
      end
      
      left_index = low
      right_index = mid + 1

      (low..high).each do |i|
        if(left_index > mid)
          data[i] = aux[right_index]
          right_index += 1
        elsif(right_index > high)
          data[i] = aux[left_index]
          left_index += 1
        elsif(aux[right_index] < aux[left_index])
          data[i] = aux[right_index]
          right_index += 1
        else
          data[i] = aux[left_index]
          left_index += 1
        end
      end
    
    end

    def self.insertion_sort(data)
      return nil if !data
      answer = data.dup
      return answer if(answer.length <= 1)
      1.upto(answer.length - 1) do |i|
        mover_index = i
        (i-1).downto(0) do |j|
          if(answer[j] > answer[mover_index])
            answer[j],answer[mover_index] = answer[mover_index],answer[j]
            mover_index = j
          else
            break
          end
        end
      end
      answer
    end

  end
end
