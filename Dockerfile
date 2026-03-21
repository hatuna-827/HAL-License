FROM ruby:3.2
RUN apt-get update && apt-get install -y \
  build-essential nodejs git
RUN gem install jekyll bundler
WORKDIR /srv/jekyll
