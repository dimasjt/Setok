source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.5.0"

gem "rails", "~> 5.2.0"
gem "pg", ">= 0.18", "< 2.0"
gem "puma", "~> 3.11"
gem "sass-rails", "~> 5.0"
gem "uglifier", ">= 1.3.0"
gem "webpacker"
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem "mini_racer", platforms: :ruby

gem "coffee-rails", "~> 4.2"
gem "turbolinks", "~> 5"
gem "jbuilder", "~> 2.5"
# gem "redis", "~> 4.0"

# Use ActiveStorage variant
# gem "mini_magick", "~> 4.8"

gem "devise"
gem "graphql"

gem "bootsnap", ">= 1.1.0", require: false
gem "figaro"


group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem "web-console", ">= 3.3.0"
  gem "listen", ">= 3.0.5", "< 3.2"

  gem "rubocop", "~> 0.55.0", require: false

  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
end

group :test do
  gem "capybara", "~> 2.15"
  gem "selenium-webdriver"
  gem "chromedriver-helper"

  gem "rspec-rails", "~> 3.7"
  gem "factory_bot"
  gem "faker"
  gem "database_cleaner"
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'graphiql-rails', group: :development