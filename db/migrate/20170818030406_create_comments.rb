class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :title
      t.text :body
      t.string :author, null: false

      t.timestamps
    end
  end
end
