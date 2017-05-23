require 'pry'

class Scrabble

  def self.score(word)
    scores = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10]
    word.upcase!
    @@count = 0

    for i in 0..word.length-1 do
      #returns the ASCII value, between 65 and 90
      index = word[i].ord
      #offset by -65 to get the right index for scores
      @@count += scores[index-65]
    end
    puts "Scrabble score: #{@@count}"
    self
  end


  def self.double
    @@count = @@count * 2
    puts "Scrabble score doubled: #{@@count}"
  end

  def self.triple
    @@count = @@count * 3
    puts "Scrabble score tripled: #{@@count}"
  end


  def self.double_letter(letter)
    index = letter.ord
    @@count += scores[index-65]
    puts "Scrabble with double letter: #{@@count}"
  end


end




# self.score(word).double
# self.score(word).triple
# self.score(word).double_letter("a", "b")
# self.score(word).triple_letter("a", "b")



#or
# self.double_score(word)
# self.double_letter(word, letter)
#



binding.pry
