class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :email, :password
end
