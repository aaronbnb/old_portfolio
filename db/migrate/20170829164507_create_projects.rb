class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :thumbnail
      t.string :tagline
      t.string :languages
      t.text :description
      t.string :main_image

      t.timestamps
    end
  end
end
