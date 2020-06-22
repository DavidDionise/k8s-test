FROM node:14

WORKDIR /app
RUN mkdir src

COPY package*.json /app/
COPY src/ ./src

RUN npm install

ENV PORT=3002

EXPOSE 3002

CMD [ "node", "src/index.js" ]