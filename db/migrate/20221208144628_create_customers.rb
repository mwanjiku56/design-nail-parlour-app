class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.string :first_name
      t.string :email
      t.string :password

      t.timestamps
    end
  end
end
