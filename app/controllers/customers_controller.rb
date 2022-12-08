class CustomersController < ApplicationController
    def index
        render json: Customer.all 
    end
    def create
        customer = Customer.create!(customer_params)
        render json: customer, status: :created
      end
    private
    def find_customer
        Customer.find_by(id: params[:id])
    end

    def customer_params
    params.permit(:first_name, :last_name, :email, :password, :confirm_password, :manicurist_id)
    end
end
