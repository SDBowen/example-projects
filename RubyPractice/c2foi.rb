puts 'Reading Fahrenheit temp value from data file...'
num = File.read('temp.dat')
faherenheit = num.to_i
celsius = (faherenheit - 32) / 1.8
puts celsius
puts "Saving result to output file 'temp.out'"
fh = File.new('temp.out', 'w')
fh.puts celsius
fh.close
