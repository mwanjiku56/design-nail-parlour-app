class ManicuristsController < ApplicationController
    def index
        render json: Manicurist.all 
    end
end
