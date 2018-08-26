# require_relative 'stacklike'
# class Suitcase
# end
# class CargoHold
#   include Stacklike
#   def load_and_report(obj)
#     print 'Loading object '
#     puts obj.object_id
#     add_to_stack(obj)
#   end

#   def unload
#     take_from_stack
#   end
# end
# ch = CargoHold.new
# sc1 = Suitcase.new
# sc2 = Suitcase.new
# sc3 = Suitcase.new
# ch.load_and_report(sc1)
# ch.load_and_report(sc2)
# ch.load_and_report(sc3)
# first_unloaded = ch.unload
# print 'The first suitcase off the plane is....'
# puts first_unloaded.object_id

# module InterestBearing
#   def calculate_interest
#     puts "Placeholder! We're in module InterestBearing."
#   end
#     end
# class BankAccount
#   include InterestBearing
#   def calculate_interest
#     puts "Placeholder! We're in class BankAccount."
#     puts "And we're overriding the calculate_interest method..."
#     puts 'which was defined in the InterestBearing module.'
#   end
# end
# account = BankAccount.new
# account.calculate_interest

class Person
  PEOPLE = []
  attr_reader :name, :hobbies, :friends
  def initialize(name)
    @name = name
    @hobbies = []
    @friends = []
    PEOPLE << self
    # puts "created #{name}"
  end

  def has_hobby(hobby)
    @hobbies << hobby
  end

  def has_friend(friend)
    @friends << friend
  end

  def self.method_missing(m, *args)
    method = m.to_s
    if method.start_with?('all_with_')
      attr = method[9..-1]
      if public_method_defined?(attr)
        PEOPLE.find_all do |person|
          person.send(attr).include?(args[0])
          puts "#{person.name} is into #{person.hobbies[0]}"
        end
      else
        raise ArgumentError, "Can't find #{attr}"
      end
    else
      super
    end
  end
end

e = Person.new('Eric B.')
r = Person.new('Rakim')
e.has_friend(r)
e.has_hobby('cycling')
r.has_hobby('drums')
Person.all_with_hobbies('cycling')
