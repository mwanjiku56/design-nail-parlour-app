class Customer < ApplicationRecord
    has_many :appointments
    has_many :reviews
    has_many :manicurists, through: :appointments

    validates :name, presence: true
    validates :password, length: { minimum: 8 }
    validates :email, uniqueness: true
end
