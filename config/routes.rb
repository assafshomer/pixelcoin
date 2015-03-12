Pixelcoin::Application.routes.draw do

  root       to: 'static_pages#home'

  match "/home",           to: 'static#home',              via: :get
  
end
