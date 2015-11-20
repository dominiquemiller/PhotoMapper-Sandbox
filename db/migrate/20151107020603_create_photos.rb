class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :title
      t.text :description
      t.decimal :longitude
      t.decimal :latitude
      t.string :picture

      t.timestamps null: false
    end
  end
end
