class Manicurist < ApplicationRecord
    has_many :appointments
    has_many :customers, through: :appointments

    validates :name, presence: true

end
