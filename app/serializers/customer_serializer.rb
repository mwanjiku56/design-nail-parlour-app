class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password, :confirm_password, :manicurist_id
end
