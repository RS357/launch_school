# Q1

def has_lab(string)
  if string =~ /lab/ 
    puts string 
  end 
end 

has_lab "laboratory"
has_lab "experiment"
has_lab "Pans Labyrinth"
has_lab "elaborate"
has_lab "polar bear"

# Q2
# It will return the block object, and print the object to the screen. 

# Q3
# Exception handling allows the program to handle exceptions without ending.

# Q4

def execute(&block)
  block.call()
end

execute { puts "Hello from inside the execute method!" }

# Q5

# There is no ampersand sign in front of 'block'
