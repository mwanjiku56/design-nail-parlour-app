class RemoveColumnFromTableName < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews,:manicurist_id
  end
end
