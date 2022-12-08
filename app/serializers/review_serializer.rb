class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review_note, :customer_id, :appointment_id
end
