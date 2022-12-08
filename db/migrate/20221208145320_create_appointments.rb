class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.integer :customer_id
      t.string :nail_design
      t.string :date
      t.integer :manicurist_id

      t.timestamps
    end
  end
end
