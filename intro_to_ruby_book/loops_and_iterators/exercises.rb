#Q1 It returns the array referenced by the variable x

#Q2
# input = ""
# loop do 
#   input = gets.chomp
#   if input == "STOP" 
#     break
#   end 
#   puts "your input is: #{input}" 
# end 

#Q3
def count(num) 
  if num <= 0 
    puts num
  else 
    puts num
    count(num - 1) 
  end 
end 

count(-3)