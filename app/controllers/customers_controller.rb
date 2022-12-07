class CustomersController < ApplicationController
    def index
        render json: Customer.all 
    end
    def create
        user = Customer.create!(customer_params)
          session[:user_id] = user.id
          render json: user, status: :created
      end
    private
    def find_customer
        Customer.find_by(id: params[:id])
    end

    def customer_params
    params.permit(:first_name, :last_name, :email, :password, :confirm_password)
    end
end
