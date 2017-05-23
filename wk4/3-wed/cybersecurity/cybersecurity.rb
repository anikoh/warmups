
require 'pry'

file_name = ARGV[0]
file = File.open(file_name)
security_array = []

file.each do |line|
  security_array.push(line.chomp.split(","))
end

file.close
security_array.shift(2)

puts security_array


security_hash= {}

security_array.each do |elem|

  security_hash[elem[0]] ={
  :product => elem[1],
  :unitPrice => elem[2],
  :units => elem[3],
  :totalPrice => (elem[2].to_i * elem[3].to_i).to_s
  }
end

binding.pry


# .to_sym
