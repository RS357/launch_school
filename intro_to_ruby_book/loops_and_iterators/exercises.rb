# Q1
# [1, 2, 3, 4, 5]

# Q2 
# input = ''
# while input != 'STOP'
#   input = gets.chomp 
#     puts input
# end 

# Q3
def countdown(num) 
  if num <= 0
    puts num
    return
  end
  puts num
  countdown(num - 1)
end

countdown(10)