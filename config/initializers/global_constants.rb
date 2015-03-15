DEV = (Rails.env=='development')
PROD = (Rails.env=='production')
TEST = (Rails.env=='test')
HEROKU = (Rails.root.to_path=="/app")
PIXELS = if PROD then 1000 else 10 end