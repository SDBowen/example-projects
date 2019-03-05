def find_short(s)
  words = s.split(' ')
  smallest_length = words.first.length

  words.each do |word|
    smallest_length = word.length if word.length < smallest_length
  end

  smallest_length
end
