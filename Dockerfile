FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --no-optional
COPY index.js ./

CMD ["node", "index.js"]
