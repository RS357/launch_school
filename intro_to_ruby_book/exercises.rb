arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
new_arr = []

# Q1
arr.each { |num| puts num }

# Q2
arr.each { |num| puts num if num > 5 } 

# Q3
arr.select { |num| new_arr << num if num.odd? }

# Q4
arr << 11
arr.unshift 0
puts arr 

# Q5
arr.pop
arr << 3
puts arr

# Q6
arr.uniq
p arr

# Q7
# A hash contains a key value pair for referencing by key. 

# Q8
hash1 = {name: 'Riz'}
hash2 = {:name => 'Syed'}

# Q9
h = {a:1, b:2, c:3, d:4}
val = h[:b]
h[:e] = 5
h.each do |key, val|
  puts val < 3.5
  if val < 3.5 
    h.delete(key)
  end
end

# Q 10
# Hash values can be arrays and you can have an array of hashes
# eg:
# hash = {arr: [1, 2]}
# arr = [{name: 'Riz'}, {age: 12}]

# Q 11
contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"],
            ["sally@email.com", "404 Not Found Dr.", "123-234-3454"]]

contacts = {"Joe Smith" => {}, "Sally Johnson" => {}}

contacts["Joe Smith"][:email] = contact_data[0][0]
contacts["Joe Smith"][:address] = contact_data[0][1]
contacts["Joe Smith"][:phone] = contact_data[0][2]
contacts["Sally Johnson"][:email] = contact_data[1][0]
contacts["Sally Johnson"][:address] = contact_data[1][1]
contacts["Sally Johnson"][:phone] = contact_data[1][2]

# Q12 
puts "Joe's email is #{contacts["Joe Smith"][:email]}"
puts "Joe's email is #{contacts["Sally Johnson"][:phone]}"

# Q13
arr = ['snow', 'winter', 'ice', 'slippery', 'salted roads', 'white trees']

arr.delete_if { |word| word.start_with?("s") }

arr.delete_if {|word| word.start_with?('s') || word.start_with?('w') }
p arr

# Q14

a = ['white snow', 'winter wonderland', 'melting ice',
     'slippery sidewalk', 'salted roads', 'white trees']
b = []
a.each do |word| 
  splitted = word.split(' ')
  b << splitted
end 
b.flatten!
a = b
p b

# Q15 - "These hashes are the same!"
contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"],
            ["sally@email.com", "404 Not Found Dr.", "123-234-3454"]]
contacts = {"Joe Smith" => {}, "Sally Johnson" => {}}
fields = [:email, :address, :phone]


contacts.each do |key, hash|
  shifted = contact_data.shift
  fields.each do |field|
    hash[field] = shifted.shift
  end 
end 
p contacts


  