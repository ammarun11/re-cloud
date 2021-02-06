FROM jekyll/jekyll:3.8

ADD . /srv/jekyll

WORKDIR /srv/jekyll

COPY --chown=docker:docker Gemfile.lock ./srv/jekyll

RUN jekyll build

EXPOSE 4000
