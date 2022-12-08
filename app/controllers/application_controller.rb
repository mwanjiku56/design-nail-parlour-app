class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity


  def render_unprocessable_entity(invalid)
    return render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
  def authorize
		return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :customer_id
	end

end
