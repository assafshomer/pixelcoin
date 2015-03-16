source 'https://rubygems.org'
ruby '2.2.1'

gem 'rails', '4.2.0'
gem 'sass-rails',   '4.0.3'
gem 'twitter-bootstrap-rails'
gem 'bootstrap-sass', '2.3.0.1'
gem 'jquery-rails'
gem 'jquery-ui-rails'
gem 'bcrypt-ruby', '3.0.0'
gem 'faker', '1.1.2'
gem 'will_paginate', '3.0.4'
gem 'bootstrap-will_paginate', '0.0.9'
gem 'jquery-fileupload-rails'
gem 'paperclip'
gem 'slim'
gem 'rqrcode-rails3'
gem 'bitcoin-ruby'
gem 'quiet_assets', '~> 1.0.3'
gem 'coffee-rails'
gem 'uglifier', '>= 1.3.0'
gem 'jbuilder', '~> 1.2'

group :development, :test do
  gem 'sqlite3'
  gem 'rspec-rails'
  gem 'therubyracer', :platforms=>:ruby
  gem 'rb-readline', "~> 0.5.0"
  gem 'guard-rspec'
  gem 'spork-rails', github: 'sporkrb/spork-rails'
  gem 'guard-spork'
  gem 'childprocess', '0.3.6'
  gem 'pry-rails'
  gem 'pry-byebug'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'annotate', ">=2.5.0"
end

group :test do
  gem 'selenium-webdriver', '2.35.1'
  gem 'capybara'
  gem 'rb-inotify', '0.9.0'
  gem 'libnotify', '0.8.0'
  gem 'rb-fsevent', '0.9.3', :require => false
  gem 'growl', '1.0.3'
  gem 'launchy', '2.2.0'
  gem 'factory_girl_rails', '4.2.0'
  gem 'cucumber-rails', '1.3.0', :require => false
  gem 'database_cleaner', '~> 1.0.0.RC1'
end

group :production do
  gem 'pg', '0.15.1'
  gem 'rails_12factor', group: :production  
  gem 'rails_log_stdout',           github: 'heroku/rails_log_stdout'  
  gem 'ffi'
end