# How old is Teddy?
# age = rand(2..200)
# puts "Teddy is #{age} years old!"

# How big is the room?
# SQMETERS_TO_SQFEET = 10.7639
# puts "Enter the length of the room in meters: "
# length = gets.chomp.to_f
# puts "Enter the width of the room in meters: "
# width = gets.chomp.to_f
# area_meters = width * length
# area_feet = area_meters * SQMETERS_TO_SQFEET
# puts "The area of the room is #{area_meters.round(2)} square meters" + \
#      "#{area_feet.round(2)} square feet)."

# Tip calculator precision 2 flag f
# puts "What is the bill?"
# bill = gets.chomp.to_i
# puts "what is the tip percentage?"
# tip_percent = gets.chomp.to_f
# tip = bill * (tip_percent / 100.0)
# total = sprintf('%.2f' , bill + tip)
# tip = sprintf('%.2f' , bill * (tip_percent / 100.0) )
# puts "The tip is #{tip}"
# puts "The total is #{total}"

# When will I Retire?
# current_year = Time.now.year
# puts "What is your age? "
# age = gets.chomp.to_i
# puts "At what age would you like to retire?"
# retire_age = gets.chomp.to_i
# retirement_year = current_year + (retire_age - age)
# puts "It's #{current_year}. You will retire in #{current_year + (retire_age - age)}"
# puts "You only have #{retirement_year - current_year} years to go"

# Greeting a user
# puts "What is your name?"
# name = gets.chomp
# if name[-1] == '!'
#   puts "HELLO #{name.chop.upcase}. WHY ARE WE SCREAMING?"
# else
#   puts "Hello #{name}"
# end

# Odd numbers
# for num in (1..100)
#   puts num if num.odd?
# end

# Even numbers
# for num in (1..100)
#   puts num if num.even?
# end

# Sum or Product of Consecutive Integers
# puts "Please enter an integer greater than 0:"
# int = gets.chomp.to_i
# puts " Enter 's' to compute the sum, 'p' to compute the product."
# compute = gets.chomp
# result = 0

# if compute == 's'
#   1.upto(int) {|num| result += num}
#   puts "The sum of the integers between 1 and #{int} is #{result}."
# else
#   result = 1
#   1.upto(int) {|num| result *= num}
#   puts "The product of the integers between 1 and #{int} is #{result}."
# end