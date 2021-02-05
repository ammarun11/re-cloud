FROM jekyll/jekyll:latest

ADD . /srv/jekyll

ENV JEKYLL_UID=1000 
ENV JEKYLL_GID=1000

RUN jekyll build

EXPOSE 4000
