

FROM node:6.11.5    

WORKDIR /bin
COPY seeds.js .
RUN node seeds.js    
COPY . .
CMD [ "npm", "seeds" ] 


FROM node:6.11.5    

WORKDIR /
COPY package.json .
RUN npm install    
COPY . .

CMD [ "npm", "run dev" ]  

FROM node:6.11.5    

WORKDIR /client
COPY package.json .
RUN npm install    
COPY . .

CMD [ "npm", "start" ]  