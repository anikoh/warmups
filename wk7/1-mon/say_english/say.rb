require 'pry'

class Say

  attr_reader :value, :english

 def initialize( num )
    @value = num
  end




  def in_english

   if @value > -1 && value < 100

     @english = ""

     if @value == 0
       @english << 'zero'
     elsif @value - @value % 10 == 10
       @english << 'ten'
     elsif @value - @value % 10 == 20
       @english << 'twenty'
     elsif @value - @value % 10 == 30
       @english << 'thirty'
     elsif @value - @value % 10 == 40
       @english << 'fourty'
     elsif @value - @value % 10 == 50
       @english << 'fifty'
     elsif @value - @value % 10 == 60
       @english << 'sixty'
     elsif @value - @value % 10 == 70
       @english << 'seventy'
     elsif @value - @value % 10 == 80
       @english << 'eighty'
     elsif @value - @value % 10 == 90
       @english << 'ninety'
     elsif @value - @value % 10 == 100
       @english << 'hundred'
     end


     if @value % 10 == 1
       @english << '-one'
     elsif @value % 10 == 2
       @english << '-two'
     elsif @value % 10 == 3
       @english << '-three'
     elsif @value % 10 == 4
       @english << '-four'
     elsif @value % 10 == 5
       @english << '-five'
     elsif @value % 10 == 6
       @english << '-six'
     elsif @value % 10 == 7
       @english << '-seven'
     elsif @value % 10 == 8
       @enlish << '-eight'
     elsif @value % 10 == 9
       @english << '-nine'
     end




   else
     raise ArgumentError.new("Number must be between 0 and 99, inclusive.")
   end


  end


end


binding.pry
