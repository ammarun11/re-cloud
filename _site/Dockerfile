FROM ruby:2.5

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

# Reduce layers by grouping related commands into single RUN steps
RUN groupadd -r -g 1001 appuser && \
useradd -r -m -u 1001 -g appuser appuser

# Setting workdir will also create the dir if it doesn't exist, so no need to mkdir
WORKDIR /srv/jekyll

# Copy everything over in one go
COPY . /srv/jekyll

# This line should fix your issue 
# (give the user ownership of their home dir and make Gemfile.lock writable)
# Must still be root for this to work
RUN chown -R appuser:appuser /srv/jekyll && \
chmod +w /srv/jekyll/Gemfile.lock

USER appuser

RUN bundle install
