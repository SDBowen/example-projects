def persistence(n)
  digits = n.digits
  cycle = 0

  until digits.count == 1
    result = digits.inject(:*)
    digits = result.digits
    cycle += 1
  end

  cycle
end
