FROM node:alpine

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "index.js", "./"]
RUN npm ci --no-optional

CMD ["node", "index.js"]
