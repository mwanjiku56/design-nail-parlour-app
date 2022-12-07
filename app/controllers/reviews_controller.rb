class ReviewsController < ApplicationController
    def index
        render json: Review.all 
    end
    def update
        review = find_review
        if review
            review.update!(review_params)
            render json: review
        else
            render json: {error: "Review not found"}, status: :not_found
        end

    end
    def show
        review = find_review
        if review
            render json: review
        else 
            render json: { "error": "Review not found" }, status: :not_found
        end
    end
    def create
        # customer = Customer.find_by(id: session[:customer_id])
        review = Review.create!(review_params)
        render json: review, status: :created
      end
    private
    def find_review
        Review.find_by(id: params[:id])
    end

    def review_params
    params.permit(:review_note, :customer_id)
    end
end
