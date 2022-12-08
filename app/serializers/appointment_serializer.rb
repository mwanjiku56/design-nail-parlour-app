class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :nail_design, :date, :manicurist_id
end
