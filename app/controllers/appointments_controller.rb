class AppointmentsController < ApplicationController
    def index
        appoint=Appointment.all 
        render json: appoint

    end

    def show
        appointment = find_appointment
        if appointment
            render json: appointment
        else 
            render json: { "error": "Appointment not found" }, status: :not_found
        end
    end

    def create
        # appointment = Appointment.find_by(id: session[:customer_id])
        appointment = Appointment.create!(appointment_params)
        render json: appointment, status: :created
      end
    private
    def find_appointment
        Appointment.find_by(id: params[:id])
    end
    def appointment_params
        params.permit(:customer_id, :customer_name, :nail_design, :date, :manicurist_id)
    end

end
