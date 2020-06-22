FROM node:14

WORKDIR /app
RUN mkdir src

COPY package*.json /app/
COPY src/ ./src

RUN npm install

ENV PORT=3001

EXPOSE 3001

CMD [ "node", "src/index.js" ]