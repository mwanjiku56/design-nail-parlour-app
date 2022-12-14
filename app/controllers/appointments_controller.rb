class AppointmentsController < ApplicationController
     

    def index
        appoint=Appointment.all 
        render json: appoint
    end

    def create
        # appointment = Appointment.find_by(id: session[:customer_id])
        appointment = Appointment.create!(appointment_params)
        render json: appointment, status: :created
    end
    def show
        appointment = find_appointment
        if appointment
            render json: appointment
        else 
            render json: { "error": "Appointment not found" }, status: :not_found
        end
    end

    def update
       appointment = Appointment.find_by(id: params[:id])
       if appointment
          appointment.update(appointment_params)
          render json: appointment
       else
          render json: { error: "Appointment not found" }, status: :not_found
        end
    end
    def destroy
		appointment = Appointment.find(params[:id])
		appointment.destroy
		render json: {}
	end
    def appointment_params
        params.permit(:customer_id, :nail_design, :date, :manicurist_id)
    end
    def find_appointment
        Appointment.find_by(id: params[:id])
    end
end
