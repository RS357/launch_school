# Q1
# 1) false, 2) false, 3) false, 4) true, 5) true 

# Q2

# def capitalise(string) 
#   if string.length > 10
#     return string.upcase
#   else 
#     string 
#   end
# end

# string = "Hello"

# puts capitalise(string)
# puts capitalise(string * 3)

# Q3 

# puts "Enter a number between 0 and 100"
# num = gets.chomp.to_i


if num < 0
  puts "You can't enter a negative number!"
elsif num >= 0 && num <= 50
    puts "#{num} is between 0 and 50"
elsif num >= 51 && num <= 100
  puts "#{num} is between 51 and 100"
else
  puts "#{num} is greater than 100"
end

# Q4
# Snip 1 - "FALSE", Snip 2 - "Did you get it right?", Snip 3 - "Alright now"

# Q5 
# It means that the end keyword was read to be the end of the if...else statement 
# and not the end of the method. The interpreter was expecting the end keyword 
# to close off the method. 

# Q6 
# 1) raises an error, 2) false, 3) false, 4) true, 5) false, 6) true