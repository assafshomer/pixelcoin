Pixelcoin::Application.routes.draw do

  root       to: 'pixels#pixels'

  match "/pixels",           to: 'pixels#pixels',              via: :get
  match "/vanity",           to: 'pixels#vanity',              via: :get
  post "pixels/save"
end
