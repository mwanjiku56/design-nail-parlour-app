class Review < ApplicationRecord
    belongs_to :customer

    validates :review_note, length: {minimum: 20}
end
