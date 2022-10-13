FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN touch .env
RUN echo "TOKEN=<your token here>" >> .env

COPY . .

CMD [ "npm", "start"]