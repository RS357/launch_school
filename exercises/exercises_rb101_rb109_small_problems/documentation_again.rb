#Class and Instance Methods
# File::path is a class method and File#path is an instance method. 

# Optional Arguments Redux
# prints:
# 1) -4712-01-01
# 2) 2016-01-01
# 3) 2016-05-01
# 4) 2016-05-13

# Default Arguments in the Middle
# => [4, 5, 3, 6]

# Mandatory Blocks
# puts a.bsearch{ |x| x > 8 }

# Multiple Signatures
# a = %w(a b c d e)
# => ['a', 'b', 'c', 'd', 'e']

# puts a.fetch(7)
# => IndexError 

# puts a.fetch(7, 'beats me')
# => 'beats me'

# puts a.fetch(7) { |index| index**2 }
# => 49

# Parent Class
# puts s.public_methods(false).inspect

# Included Modules
# puts a.min(2)

# Down The Rabbit Hole - found doc page.

# Repeat Yourself
# def repeat(str, int) 
#   int.times {puts str}
# end 

# Odd
# def is_odd?(num) 
#   return true if num % 2 == 1 
#   false 
# end 

# List of Digits
# def digit_list(num)
#   num.to_s.chars.map(&:to_i)
# end 

# How Many?
# def count_occurrences(vehicles)
#   vehicles.uniq.each do |vehicle|
#     puts "#{vehicle} => #{vehicles.count(vehicle)}"
#   end 
# end 

# Reverse It (Part 1)
# def reverse_sentence(string)
#   string.split(' ').reverse.join(' ')
# end 

# Reverse It (Part 2)
# def reverse_words(string)
#   arr = string.split(' ')
#   arr.each do |word|
#     word.reverse! if word.length >= 5
#   end 
#   arr.join(' ')
# end 

# Stringy Strings
# def stringy(num)
#   str = '10' * (num/2)
#   return str if num % 2 == 0
#   str + '1'
# end 

# Array Average
# def average(arr)
#   sum = arr.reduce(:+)
#   answer = sum / arr.count
#   answer.to_f
# end 

# Sum of Digits
# def sum(num)
#   num.to_s.chars.map(&:to_i).sum
# end 

# What's my Bonus?
# def calculate_bonus(num, bool) 
#   bool ? (num / 2) : 0
# end 
