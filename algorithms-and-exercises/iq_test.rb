def iq_test(numbers)
  numbers_array = numbers.split(' ').map(&:to_h)

  print numbers_array

  # even_or_odd = numbers_array.map(&:even?)
end
