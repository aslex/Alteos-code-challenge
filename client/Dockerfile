# FROM node:6.11.5 
# WORKDIR /client
# COPY package.json .
# RUN npm install    
# COPY . .
# CMD [ "npm", "start" ]


FROM node:lts-slim
RUN mkdir -p /usr/src/app
WORKDIR /usr/app
COPY package.json .
RUN npm install    
COPY . /usr/app

EXPOSE 3000

CMD [ "npm", "start" ]