def iq_test(numbers)
  even_or_odd = numbers.split(' ').map(&:to_i).map(&:even?)

  count = Hash.new(0)
  even_or_odd.each { |value| count[value] += 1 }
  
  return even_or_odd.index(count.key(1)) + 1
end

