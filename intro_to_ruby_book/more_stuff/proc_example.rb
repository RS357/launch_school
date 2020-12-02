talk = Proc.new do |name|
  puts "I am talking #{name}." 
end 

talk.call "Bob"