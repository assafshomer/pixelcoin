Pixelcoin::Application.routes.draw do

  root       to: 'static_pages#pixels'

  match "/home",           to: 'static_pages#home',              via: :get
  match "/pixels",           to: 'static_pages#pixels',              via: :get
  
end
