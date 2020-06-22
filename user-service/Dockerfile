FROM node:14

WORKDIR /app
RUN mkdir src

COPY package*.json /app/
COPY src/ ./src

RUN npm install

ENV PORT=3004

EXPOSE 3004

CMD [ "node", "src/index.js" ]