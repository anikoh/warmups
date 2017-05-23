require 'pry'
require 'securerandom.rb'

class Robot
  #can only read the values, not set them
  attr_reader :name, :mac_address, :creation_time, :boot_time, :instructions

  def initialize
    @name = generate_name
    @mac_address = SecureRandom.uuid
    @creation_time = Time.now
    @boot_time = Time.now
    @instructions = 0
  end




  def generate_name
    letters = get_random_string(2)
    letters << SecureRandom.random_number(1000).to_s
  end

  def name
    @instructions += 1
    puts @name
  end


  def reset
    @name = generate_name
    @boot_time = Time.now
    @instructions += 1
  end

  def instruction_count
    puts @instructions
  end

  def timers
    current_time =Time.now
    puts "#{(current_time - boot_time).to_i} seconds since last boot, #{(current_time - creation_time).to_i} seconds since creation"
  end


  def get_random_string(length=2)
    source=("A".."Z").to_a
    key=""
    length.times{ key += source[rand(source.size)].to_s }
    return key

  end

    # def initialize
    #   @name = "#{prefix}#{suffix}"
    # end
    # def name
    #   @name
    # end
    #
    # def prefix
    #   ('aa'..'zz').to_a.sample
    # end
    #
    # def suffix
    #   ('000'..'999').to_a.sample
    # end
    #
    # def reset
    #  @name = "#{prefix}#{suffix}"
    # end

    # setter, called as : r1.name= 'djddkk' , the = is part of the method name
    # def name= (name)
    #   @name = name
    # end
    #

end
binding.pry

# ::uuid generates a v4 random UUID (Universally Unique IDentifier).
