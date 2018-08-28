# class C
#   puts 'Just started class C:'
#   puts self
#   module M
#     puts 'Nested module C::M:'
#     puts self
#   end
#   puts 'Back in the outer level of C:'
#   puts self
# end

# class C
#   class << self
#   def x
#     puts 'run x'
#     puts "self: #{self}"
#   end

#   def y
#     # definition of y
#   end
#   end
# end

# class D < C
# end
# D.x

# class C
#   a = 5
#   module M
#   a = 4
#   module N
#   a = 3
#   class D
#   a = 2
#   def show_a
#   a = 1
#   puts a
#   end
#   puts a
#   end
#   puts a
#   end
#   puts a
#   end
#   puts a
# end
# d = C::M::N::D.new
# d.show_a

class Car
  # @@makes = []
  # @@cars = {}
  attr_reader :make
  def self.total_count
    @total_count ||= 0
  end

  class << self
    attr_writer :total_count
  end

  def self.makes
    @makes ||= []
  end

  def self.cars
    @cars ||= {}
  end

  def self.add_make(make)
    unless makes.include?(make)
      makes << make
      puts "list: #{makes}" # ADDED
      cars[makes] = 0
      puts "cars: #{cars}" # ADDED
    end
  end

  def initialize(make)
    if Car.makes.include?(make)
      puts "Creating a new #{make}!"
      @make = make
      puts "add car:"
      puts Car.cars
      self.class.cars[make] += 1
      self.class.total_count += 1
    else
      puts Car.makes
      raise "No such make: #{make}."
    end
  end

  def make_mates
    @@cars[make]
  end
end

class Hybrid < Car
end
f2 = Car.add_make('Honda')
h3 = Car.add_make('Ford')
h3 = Hybrid.new('Honda')
f2 = Hybrid.new('Ford')
puts "There are #{Hybrid.total_count} hybrids on the road!"
