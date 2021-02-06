FROM jekyll/jekyll:3.8

ADD . /srv/jekyll

WORKDIR /srv/jekyll

RUN jekyll build

EXPOSE 4000
