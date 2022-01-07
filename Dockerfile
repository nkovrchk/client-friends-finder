FROM node:12-alpine

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]