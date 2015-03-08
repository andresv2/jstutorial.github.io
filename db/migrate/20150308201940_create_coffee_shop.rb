class CreateCoffeeShop < ActiveRecord::Migration
  def change
    create_table :coffee_shops do |t|
      t.string 'name',        null: false
      t.string 'latitude',    null: false
      t.string 'longitude',   null: false
      t.string 'address',     null: false
      t.string 'notes',       null: false

    end

  end
end

