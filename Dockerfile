FROM node:latest

ENV NAME="BANU"

WORKDIR /app

COPY . /app

RUN npm install

CMD echo "heeejjj $NAME!"

