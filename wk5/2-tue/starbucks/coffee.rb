require 'pry'

class Coffee

  attr_accessor :name, :collected, :options

  def initialize(new_kind, new_sugars, new_size, new_name)
    @kind = new_kind
    @sugars = new_sugars
    @size = new_size
    @name = misspell(new_name)
    @collected = false
    @options = []
    @creation_time = Time.now
    @time_to_make = rand(120..300)  #2min to 5min in seconds
  end

  def to_s
    "#{@name}'s #{@kind}, #{@size}, #{@sugars}."
  end

  def misspell(name)
    name_array = name.split("")
    rand_no =(rand(1..name_array.length))/2
    rand_no.times do
      new_letter =('a'..'z').to_a.sample
      rand_index = rand(1..name_array.length-1)
      name_array[rand_index] = new_letter
    end
    name_array.join("")
  end

  def ready?
      if Time.now > @creation_time + @time_to_make
      "#{@name}'s #{@kind}, #{@size}, #{@sugars}!"
    else
      "Not ready!"
    end
  end

  def add_options(option)
    @options << option
  end

end

binding.pry
