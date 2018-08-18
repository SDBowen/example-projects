# obj = Object.new

# def obj.talk
#     puts "I am an object."
#     puts "(Do you object?)"
# end

# obj.talk

# obj = Object.new
#
# def obj.c2f(c)
#   c * 9.0 / 5 + 32
# end
#
# puts obj.c2f(100)

# ticket = Object.new

# def ticket.date
#   '02/19/18'
# end

# def ticket.venue
#   'Garage'
# end

# def ticket.event
#   "Author's reading"
# end

# def ticket.performer
#   'Mark Twain'
# end

# def ticket.seat
#   'Back corner, chair 2'
# end

# def ticket.price
#   2.50
# end

# def ticket.available?
#   false
# end

# def ticket.details(*x)
#   x.each { |detail| puts "This ticket is #{detail}" }
# end

# ticket.details()

# if ticket.available?
#   puts "This ticket is for: #{ticket.event}, at #{ticket.venue}.\n" \
#   "The performer is #{ticket.performer}.\n" \
#   "The seat is #{ticket.seat}, " \
#   "and it costs $#{format('%.2f.', ticket.price)}"
# else
#   puts "Tickets for: #{ticket.event}, at #{ticket.venue}, on #{ticket.date} are sold out!"
# end

# p Object.new.methods.sort

# a = Object.new
# b = a
# puts "a's id is #{a.object_id} and b's id is #{b.object_id}."

# string_1 = 'Hello'
# string_2 = 'Hello'
# puts "string_1's id is #{string_1.object_id}."
# puts "string_2's id is #{string_2.object_id}."

str = 'Hello'
abc = str
str.replace('Goodbye')
puts str
puts abc

def say_goodbye
  str = 'Hello'
  abc = str
  str.replace('Goodbye')
  puts str
  puts abc
end

say_goodbye

