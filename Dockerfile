FROM jekyll/jekyll:latest

ADD . /srv/jekyll

#ENV JEKYLL_UID=1001 
#ENV JEKYLL_GID=1001

RUN jekyll build

EXPOSE 4000
