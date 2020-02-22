FROM node:latest

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 5001

ENTRYPOINT [ "npm", "run", "dev" ]