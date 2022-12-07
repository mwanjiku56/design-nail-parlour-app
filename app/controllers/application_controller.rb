class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  def authorize
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless session[:user_id]
  end



end
