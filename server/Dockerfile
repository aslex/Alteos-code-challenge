
# FROM node:6.11.5

# COPY package.json .
# RUN npm install    
# COPY . .

# CMD [ "npm", "run dev" ]  


FROM node:lts-slim
WORKDIR /usr/app
COPY package.json .
RUN npm install    
COPY . /usr/app
EXPOSE 5000

CMD [ "npm", "run", "dev" ]