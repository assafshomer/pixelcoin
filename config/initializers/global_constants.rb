DEV = (Rails.env=='development')
PROD = (Rails.env=='production')
TEST = (Rails.env=='test')
HEROKU = (Rails.root.to_path=="/app")
PIXELS = if PROD then {x:250, y:160} elsif DEV then {x:25, y:16} else {x:3, y:3} end