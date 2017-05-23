


#loop do
  input = gets().chomp;

while input != 'q'
  # talk to Daniel here

  if input.include? "Bro"
    input.gsub!(/[aeio]/, 'a' => 4, 'e' => '3', 'i' => 1, 'o' => '0')
    puts input
  elsif input.upcase == input
    puts 'Woah, chill out!'
  elsif input.include? "?"
    puts 'Sure.'
  elsif input == 'Daniel'
    puts 'Fine. Be that way!'
  else
    puts 'Whatever.'
  end
  input = gets().chomp;

end


# Daniel triggers capitalised,
# all caps doesn't trigger capitalised
