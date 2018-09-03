def cipher(phrase, shift_number)
  ciphered_phrase = ''

  # Loop through each character's ASCII value and
  # increase by shift_number. Push to ciphered_phrase
  phrase.each_codepoint do |char|
    ciphered_phrase <<
      case char
        # When lowcase
      when 'a'.ord..'z'.ord
        'a'.ord + (char - 'a'.ord + shift_number) % 26
        # When upcase
      when 'A'.ord..'Z'.ord
        'A'.ord + (char - 'A'.ord + shift_number) % 26
      else
        char
      end
  end
  ciphered_phrase
end
