FROM node:16

ENV MONGODB_CONNECTION_PROTOCOL mongodb+srv
ENV MONGODB_DB_NAME gh-actions-demo
ENV MONGODB_CLUSTER_ADDRESS i33ljav.mongodb.net
ENV MONGODB_USERNAME tshiladitya
ENV MONGODB_PASSWORD eI3R3UfNlJgWJe17

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]