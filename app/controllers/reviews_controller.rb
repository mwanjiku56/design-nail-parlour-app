class ReviewsController < ApplicationController
    # before_action :authorize, except: [:index]

    def index
        render json: Review.all 
    end
    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def show
        review = find_review
        if review
            render json: review
        else 
            render json: { "error": "Review not found" }, status: :not_found
        end
    end

    def update
        review = find_review 
        Review.update(review_params)
        render json: review, status: :accepted
     end
    private
    def review_params
        params.permit(:review_note, :customer_id, :appointment_id, :manicurist_id)
    end

    def find_review
        Review.find_by(id: params[:id])
    end
end
