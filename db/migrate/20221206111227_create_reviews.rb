class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :review_note
      t.integer :customer_id

      t.timestamps
    end
  end
end
