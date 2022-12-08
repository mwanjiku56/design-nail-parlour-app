class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.integer :customer_id
      t.string :customer_name
      t.string :nail_design
      t.string :date
      t.string :manicurist_id
      

      t.timestamps
    end
  end
end
