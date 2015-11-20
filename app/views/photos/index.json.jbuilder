json.array!(@photos) do |photo|
  json.extract! photo, :id, :title, :description, :longitude, :latitude, :picture
  json.url photo_url(photo, format: :json)
end
