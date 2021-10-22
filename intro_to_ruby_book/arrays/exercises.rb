#Q1

# arr = [1, 3, 5, 7, 9, 1]
# number = 3 

# arr.each {|x| puts "number in arr" if x == number}

#Q2 
# 1) returns 1 , arr is [["b"], ["b", 2], ["b", 3], ["a", 1], ["a", 2], ["a", 3]]
# 2) returns [1, 2, 3], arr is [["b"], ["a", [1, 2, 3]]]

#Q3  returned = arr.last.first

#Q4
#1) => 3
#2) NoMethodError (undefined method `[]' for #<Enumerator: [15, 7, 18, 5, 12, 8, 5, 1]:index>)
#3) => 8

#Q5
#a = "e", b = "A", c = nil

#Q6 
# you can only refer to array indexes using integers. 
# can be fixed with: names[3] = "jody"

#Q7
# arr = [1, 2, 3, 4]
# arr.each_with_index { |val, ind| puts "#{ind}, #{val}"}

#Q8
# arr = [1, 2, 3, 4]
# arr2 = arr.map{|val| val += 2}

# p arr
# p arr2