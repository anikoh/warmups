
def get_squares(numbers)

  squares = []
    numbers.each do |number|
      if Math.sqrt(number) % 1 == 0
        squares << number.to_i
      end
    end

  squares.uniq.sort
end
