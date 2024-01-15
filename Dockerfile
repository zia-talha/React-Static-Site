FROM node:16-alpine AS build
WORKDIR /cyberpip.com
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start"]

