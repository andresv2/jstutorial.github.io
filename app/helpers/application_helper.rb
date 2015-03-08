module ApplicationHelper

  require 'httparty'

class Coffee
  attr_accessor :client

  CLIENT_ID=ENV['FOUR_SQUARE_CLIENT']
  CLIENT_SECRET=ENV['FOUR_SQUARE_SECRET']

  def initialize
    @client = Foursquare2::Client.new({
      :client_id => ENV['FOUR_SQUARE_CLIENT'],
      :client_secret => ENV['FOUR_SQUARE_SECRET']
    })
  end

  def self.search
    date = '0150305' # YYYYMMDD
    url="https://api.foursquare.com/v2/venues/search?radius=800&client_id=#{CLIENT_ID}&client_secret=#{CLIENT_SECRET}&v=#{date}"
    HTTParty.get url
  end


class CoffeeShop < ActiveRecord::Base



end
end
