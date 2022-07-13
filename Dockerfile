FROM node:16-alpine

RUN mkdir -p /app
WORKDIR /app
COPY . .

RUN npm cache clean --force
RUN npm install


