FROM node:14

WORKDIR /app
RUN mkdir src

COPY package*.json /app/
COPY src/ ./src

RUN npm install

ENV PORT=3000

EXPOSE 3000

CMD [ "node", "src/index.js" ]