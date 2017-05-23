require 'pry'

class Dice



  def self.roll(counter=1)
    @@roll_values = []
    counter.times do
      @@roll_value = rand(1..6)
      @@roll_values << @@roll_value
    end

    if counter == 1
      puts @@roll_value
      self
    else
      puts @@roll_values
      self
    end
  end

  def self.print
    @@roll_values
  end

  def self.sum
    @@sum_array =[]
    @@sum_array << @@roll_values
    @@sum_array <<  @@roll_values.inject(0, :+)
    @@sum_array
  end

end


binding.pry

# @@cars <- a class variable to keep all the instances of the class created
#
# def initialize(name)
#   @name = name
#   @@cars << self  <- self in this case is the car being created
# end


# self outside a definition, eg def self.roll references the class,
# self inside a method references the instance eg @@cars << self
