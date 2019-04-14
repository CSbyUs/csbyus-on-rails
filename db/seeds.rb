# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
names = ['Tanner', 'Emma', 'Austin']

# names.each{|name|
#   Comment.create(author: name, text: "My name is #{name}.")
# }

names.each{|name|
  User.create(email: "#{name}@gmail.com", password: "password1", username: name)
}
