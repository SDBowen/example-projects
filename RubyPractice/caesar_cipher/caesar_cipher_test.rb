require 'minitest/autorun'
require_relative 'caesar_cipher.rb'

class CipherTest < Minitest::Test
  def test_phrase_upcase
    phrase = 'ALL CAPS HERE'
    shift = 7
    assert_equal 'HSS JHWZ OLYL', cipher(phrase, shift)
  end

  def test_phrase_lowcase
    phrase = 'this is all lower case'
    shift = 2
    assert_equal 'vjku ku cnn nqygt ecug', cipher(phrase, shift)
  end

  def test_phrase_mixcase
    phrase = 'Mix CASE Testing'
    shift = 4
    assert_equal 'Qmb GEWI Xiwxmrk', cipher(phrase, shift)
  end

  def test_phrase_punctuation
    phrase = 'Yelling question!?'
    shift = 8
    assert_equal 'Gmttqvo ycmabqwv!?', cipher(phrase, shift)
  end
end
