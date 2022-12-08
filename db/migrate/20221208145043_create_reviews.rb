class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.text :review_note
      t.integer :customer_id
      t.integer :appointment_id
      t.integer :manicurist_id

      t.timestamps
    end
  end
end
