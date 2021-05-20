FROM klakegg/hugo:0.83.1-ext-pandoc AS build

LABEL maintainer="Seungho Jeong<platoon07@khu.ac.kr>"

RUN apk add --update \
    wget 


WORKDIR /site
COPY ./ /site

COPY ./package.json ./package-lock.json ./

RUN apk add --no-cache \
    curl \
    git \
    openssh-client \
    rsync \
    build-base \
    libc6-compat \
    npm && \
    npm install --no-optional -D --save && \
    git submodule update --init --recursive --depth 1


ARG HUGO_VERSION="0.83.1"

RUN hugo --minify

FROM nginx:alpine
COPY --from=build /site/public /usr/share/nginx/html

#EXPOSE 1313
#CMD ["/bin/sh", "-c", "sed -i 's/listen  .*/listen 1313;/g' /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]
CMD ["/bin/sh", "-c", "sed -i 's/listen  .*/listen 80;/g' /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]
EXPOSE 80 
WORKDIR /usr/share/nginx/html