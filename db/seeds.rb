# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
    
    
    
    Manicurist.create(name: "Bob", job_title: "junior manicurist")
    Manicurist.create(name: "Isaac", job_title: "senior manicurist")
    Manicurist.create(name: "marley", job_title: "manager ")
    Manicurist.create(name: "Triza", job_title: "trainee manicurist")
    Manicurist.create(name: "guru", job_title: "junior manicurist")
    Manicurist.create(name: "nice", job_title: "senior manicurist")



   Customer.create(first_name: "Martha",  email: "user@google.com", password: "sinaUbaya")
   Customer.create(first_name: "joy",  email: "user1@google.com", password: "sinaUBaya")
   Customer.create(first_name: "Mercy",  email: "user2@google.com", password: "siNaUbaya")
   Customer.create(first_name: "Melissa",  email: "user3@google.com", password: "sinaUbaYa")
   Customer.create(first_name: "Melvin",  email: "user4@google.com", password: "sinaUbAya")


    Appointment.create(customer_id: 1,nail_design:"french tips", date: "10/12/22",  manicurist_id: 1)
    Appointment.create(customer_id: 2, nail_design:"coffin design", date: "12/11/22",  manicurist_id: 5)
    Appointment.create(customer_id: 3, nail_design:"overlays", date: "13/11/22",  manicurist_id: 4)
    Appointment.create(customer_id: 4, nail_design:"stelletos", date: "20/12/22",  manicurist_id: 3)
    Appointment.create(customer_id: 5, nail_design:"natural", date: "14/11/22",  manicurist_id: 2)


    Review.create( review_note: "great service",customer_id: 2,appointment_id: 2)
    Review.create( review_note: "the service took longer today ",customer_id: 2,appointment_id: 1)
    Review.create( review_note: "great service,thankyou",customer_id: 4,appointment_id: 3)
    Review.create( review_note: "the service took longer today but i loved the outcome",customer_id: 5,appointment_id: 4)





