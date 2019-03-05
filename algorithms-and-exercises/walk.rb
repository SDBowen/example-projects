def isValidWalk(walk)
  hash = Hash.new(0)

  walk.each do |direction|
    hash[direction] += 1
  end

  total_time = 0

  hash.each do |_key, value|
    total_time += value.to_i
  end

  if total_time == 10 && hash['n'] == hash['s'] && hash['e'] == hash['w']
    return true
  else
    return false
  end
end
