a = [1, 2, 3]

# Example of a method definition that modifies its argument permanently 
def no_mutate(array) 
  array.pop 
end 

p "before mutate method: #{a}"
p no_mutate(a)
p "after mutate method: #{a}"
