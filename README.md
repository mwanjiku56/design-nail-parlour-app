
## BY DESIGN NAIL PARLOUR APP


This is a web application that enables a user to do several things when logged in. Its an application where customers can book appointent to get services at the nail parlour. A customer is able to create an account, see various nail designs that have been done, see the current manicurist(Nail technician) team by their name,and also one is able to give us a review on how they loved the services given. There are also contact details to reach out whenever you want a quick response on issues.


## Technology

- Ruby 2.7.4
- NodeJS (v16), and npm
- Render account- for deployment
- Postgresql
- React
- Css




## Back End

To get the back end started, you need a DataBase -postgres or SQlite3 will be ok and Postman to test. Ensure you have latest Ruby version(2.7.0). Rails require Ruby. Rails is installed in form of a gem, by running (`gem install rails`gem install rails), once installed you need to start a web server using (bin/rails server). Bundle install is also run at the beginning to ensure that all the dependencies are installed.
Command:- `bundle install`

Deployed back end link: https://design-nail-parlour-app-production.up.railway.app/

## DataBase

Rails is a powerful tool that helps us get most of our files by running one command. It creates the controllers, models, serializers, routes at the same time. While this is good its important to cross check that everything is as per you project layout especially the schema.
The command is : - `rails g resource (name) (attributes with their data type)`r
If the data type is not specified everything is created as a string.
After generating all the resources you create some seed data the run migrations and seed to update the schema.
command: - `rails db:migrate db:seed` 

## Connection with the front end


The application interacts with its frontend via a RESTful API where it allows users to Create, Read,Update and Delete data via the methods POST, GET, PATCH/PUT and DELETE.
To see the application live you run the command:
- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)


Deployed front end link:https://design-nail-parlour.vercel.app/


## COMPLETE MVPS
A user is able login or create an account.
A user can see appointments,book, update or delete appointment while on local host.
A user is also able to see available manicurists


## Challenges

An Error when communicating with the server.The request to post data or request data is being received but data is not sent back when working on cloud.
## Future plans
To Ensure that the communication of the server and client on cloud is seamless.
To create a feature where a user can recieve a notification when the appointment time is close.
