FROM jekyll/jekyll:latest

ADD . /srv/jekyll

RUN jekyll build

EXPOSE 4000
