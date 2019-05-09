# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
comments = ['Tanner', 'Emma', 'Austin']

comments.each{|comment|
  Comment.create(author: comment, text: "My name is #{comment}.")
}

users = ['Cady Zhou', 'Tanner Johnson', 'Megan Phibbons']
users.each{|user|
  User.create(name: user, email: "#{user.delete(' ')}@gmail.com", password: 'ilovecats123')
}
