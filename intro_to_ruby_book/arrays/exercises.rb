# Q1
arr = [1, 3, 5, 7, 9, 11]
number = 3

puts arr.include?(number)


 # Q2 - 1
 
#  arr = [['b'], ['b', 2] ['b', 3], ['a', 1], ['a', 2], ['a', 3]]

#  => 1

# Q2 - 2
# arr = [ ["b"], ["a", [1, 2, 3] ] ]

# => [[1, 2, 3]]

# Q3

# arr.last.first

# Q4  - 1) 3, 2) aNoMethodError (undefined method `[]' for #<Enumerator: [1, 2, 3, 4]:index>), 3) 8

# Q5 - a is "e", b is "A", c is nil

# Q6 - problem is that you are using a string value as the key instead of an integer value - and array indexes are integers. You can fix it 
# by using names[3] = jody instead

# Q7
arr = ['red', 'blue', 'yellow', 'green'] 

arr.each_with_index { |val, ind| puts "#{ind}, #{val}")

p arr = [1, 2, 3, 4, 5]

#Q8 
p arr2 = arr.map { |n| n + 2  }

