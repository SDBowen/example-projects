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

ticket = Object.new

def ticket.date
  '02/19/18'
end

def ticket.venue
  'Garage'
end

def ticket.event
  "Author's reading"
end

def ticket.performer
  'Mark Twain'
end

def ticket.seat
  'Back corner, chair 2'
end

def ticket.price
  2.50
end

def ticket.available?
  false
end

if ticket.available?
  puts "This ticket is for: #{ticket.event}, at #{ticket.venue}.\n" \
  "The performer is #{ticket.performer}.\n" \
  "The seat is #{ticket.seat}, " \
  "and it costs $#{format('%.2f.', ticket.price)}"
else
  puts "Tickets for: #{ticket.event}, at #{ticket.venue}, on #{ticket.date} are sold out!"
end
