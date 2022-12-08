class CustomersController < ApplicationController
    def index
        render json: Customer.all 
    end

    def create
        customer = Customer.create!(customer_params)
        session[:customer_id] = customer.id
        render json: customer, status: :created
    end
    
    private
    def customer_params
        params.permit(:first_name, :email, :password)
    end
end
