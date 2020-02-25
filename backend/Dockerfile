FROM node:lts-alpine

RUN apk --no-cache add python make g++

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5001

ENTRYPOINT [ "npm", "run", "start" ]

