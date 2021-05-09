FROM mhart/alpine-node:14
WORKDIR /bot
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "node", "src/index.mjs" ]
