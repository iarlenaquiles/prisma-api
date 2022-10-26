FROM --platform=linux/amd64 node:lts-alpine

RUN apk add --no-cache bash
RUN apt-get update
RUN apt-get install -y openssl

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app
