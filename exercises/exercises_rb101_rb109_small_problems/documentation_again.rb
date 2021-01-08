#Class and Instance Methods
# File::path is a class method and File#path is an instance method.

# Optional Arguments Redux
# prints:
# 1) -4712-01-01
# 2) 2016-01-01
# 3) 2016-05-01
# 4) 2016-05-13

# Default Arguments in the Middle
# => [4, 5, 3, 6]

# Mandatory Blocks
# puts a.bsearch{ |x| x > 8 }

# Multiple Signatures
# a = %w(a b c d e)
# => ['a', 'b', 'c', 'd', 'e']

# puts a.fetch(7)
# => IndexError

# puts a.fetch(7, 'beats me')
# => 'beats me'

# puts a.fetch(7) { |index| index**2 }
# => 49

# Parent Class
# puts s.public_methods(false).inspect

# Included Modules
# puts a.min(2)

# Down The Rabbit Hole - found doc page.
