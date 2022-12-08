class CreateManicurists < ActiveRecord::Migration[6.1]
  def change
    create_table :manicurists do |t|
      t.string :name
      t.string :job_title

      t.timestamps
    end
  end
end
