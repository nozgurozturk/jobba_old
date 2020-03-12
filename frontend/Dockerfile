FROM node:lts-alpine

WORKDIR /usr/src/app
RUN apk add python make g++
ADD package.json package-lock.json ./
RUN npm install

ADD babel.config.js .
ADD vue.config.js .

CMD ["npm", "run", "serve"]