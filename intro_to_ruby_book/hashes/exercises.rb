#Q1
# family = {  uncles: ["bob", "joe", "steve"],
#             sisters: ["jane", "jill", "beth"],
#             brothers: ["frank","rob","david"],
#             aunts: ["mary","sally","susan"]
#           }

# selected = family.select do 
#   |k, v| (k == :brothers) || (k == :sisters)
# end 

# newarr = selected.values.flatten
# p newarr


#Q2
#merge returns a new hash whereash merge! mutates the caller 

# h1 = {a: 1, b: 2, c: 3}
# h2 = {a: 2, b: 3, c: 4}

# p "h1 is #{h1}"
# p "h2 is #{h2}"

# p "h1.merge(h2) returns #{h1.merge(h2)}"
# p " after h1.merge(h2) is run, h1 is #{h1}"

# p "h1.merge!(h2) returns #{h1.merge!(h2)}"
# p " after h1.merge!(h2) is run, h1 is #{h1}"

#Q3











