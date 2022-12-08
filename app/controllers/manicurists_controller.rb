class ManicuristsController < ApplicationController
    def index
        render json: Manicurist.all 
    end

    def create
        manicurist = Manicurist.create!(manicurist_params)
        render json: manicurist, status: :created
    end

    private
    def manicurist_params
        params.permit(:name, :job_title)
    end
end
