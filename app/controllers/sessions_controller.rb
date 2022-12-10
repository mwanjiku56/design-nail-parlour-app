class SessionsController < ApplicationController
    # skip_before_action :authorize, only: :create

    def create
        customer = Customer.find_by(email: params[:email])
        if customer != nill
          if params[:password] == customer.password
            session[:customer_id] = customer.id
            render json: customer, status: :created
          else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
          end
        else
          render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    
    def destroy
		return render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :customer_id
		session.delete :customer_id
		head :no_content, status: :ok

	end
end