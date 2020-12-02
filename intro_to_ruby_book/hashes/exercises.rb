# Q1

family = {  uncles: ["bob", "joe", "steve"],
            sisters: ["jane", "jill", "beth"],
            brothers: ["frank","rob","david"],
            aunts: ["mary","sally","susan"]
          }

hash = family.select { |k, v| k == :brothers || k == :sisters}

returnarr = hash[:sisters] + hash[:brothers]

p returnarr

# Q2 - merge! is destructive, whereas merge is not. 

hash1 = {name: "Riz", age: 31}
hash2 = {name: "Riz", age: 33}
hash3 = hash1.merge(hash2)
puts hash1 # hash1 will still be the same - merge is non-destructive.

hash1.merge!(hash2)
puts hash1 # hash1[:age] will now be 33, because merge! is destructive.

# Q3

hash = {name: 'Bob', occupation: 'web developer', hobbies: 'painting'}
puts hash.keys
puts hash.values
hash.each {|k, v| puts "key is #{k} and value is #{v}"}

# Q5 person[:name]

# Q6 - the key x is a symbol in my_hash, but is a string in my_hash2.

# Q7 B

# Q8

