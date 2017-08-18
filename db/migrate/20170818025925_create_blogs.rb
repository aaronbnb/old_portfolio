class CreateBlogs < ActiveRecord::Migration[5.0]
  def change
    create_table :blogs do |t|
      t.string :title
      t.text :body
      t.string :description
      t.string :cover

      t.timestamps
    end
    add_index(:blogs, [:title], unique: true)
  end
end
