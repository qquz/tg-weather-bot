FROM mhart/alpine-node:16.4.2
WORKDIR /bot
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "node", "src/app.ts" ]
