DEV = (Rails.env=='development')
PROD = (Rails.env=='production')
TEST = (Rails.env=='test')
HEROKU = (Rails.root.to_path=="/app")
PIXELS = if PROD then 200 elsif DEV then 50 elsif TEST then 5 end