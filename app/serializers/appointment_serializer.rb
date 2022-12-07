class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :customer_name, :nail_design, :date, :manicurist_id
end
