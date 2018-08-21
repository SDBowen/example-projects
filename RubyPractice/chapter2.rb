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

# str = 'Hello'
# abc = str
# str.replace('Goodbye')
# puts str
# puts abc

# def say_goodbye
#   str = 'Hello'
#   abc = str
#   str.replace('Goodbye')
#   puts str
#   puts abc
# end

# say_goodbye

# class Ticket
#   def event
#     "Can't really be specified yet..."
#   end
#     end

# ticket = Ticket.new
# puts ticket.event

# class Person
#   def set_name(string)
#     puts "Setting person's name..."
#     @name = string
#   end

#   def get_name
#     puts "Returning the person's name..."
#     @name
#   end
#     end
# joe = Person.new
# joe.set_name('Joe')
# puts joe.get_name

# class Ticket
#     def initialize(venue,date)
#     @venue = venue
#     @date = date
#     end

#     def venue
#         @venue
#     end
#     def date
#         @date
#     end
# end

# th = Ticket.new("Town Hall", "11/12/13")
# cc = Ticket.new("Convention Center", "12/13/14")
# puts "We've created two tickets."
# puts "The first is for a #{th.venue} event on #{th.date}."
# puts "The second is for an event on #{cc.date} at #{cc.venue}."

class Ticket
  def initialize(venue)
    @venue = venue
  end

  attr_reader :price
  attr_reader :venue

  def date=(date)
    month, day, year = date.split('/')
    if year.to_i > 100 || 0
      puts 'Please submit the date in the format ‘mm/dd/yy’.'
    else
      @date = date
    end
  end

  def set_price(amount)
    @price = amount
  end

  def discount(percent)
    @price = @price * (100 - percent) / 100.0
  end
end

# th = Ticket.new('Town Hall')
# th.date = '01/12/99'
# th.set_price(100.00)
# puts "The ticket costs $#{format('%.2f', th.price)}."
# puts "The ticket for #{th.venue} has been discounted to 15% to #{th.discount(15)}."

ticket = Ticket.new('Town Hall')
# ticket.date = '11/12/13'
# ticket.date = '11/12/1913'
ticket.date = 'pizza'
