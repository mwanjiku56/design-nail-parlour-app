class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password
      t.string :confirm_password
      t.integer :manicurist_id

      t.timestamps
    end
  end
end
