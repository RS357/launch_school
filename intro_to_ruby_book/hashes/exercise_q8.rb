words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
          'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
          'flow', 'neon']
hash = {}

for word in words do 
  sorted = word.split('').sort.join()
  if hash.has_key?(sorted) 
    hash[sorted] << word
  else
    hash[sorted] = [word]
  end
end

hash.each_value { |val| puts "#{val}"}
# p hash
