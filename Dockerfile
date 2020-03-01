FROM node:12.7.0

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN npm install yarn -g 
RUN yarn install

# copy source files
COPY ./ /usr/src/app

CMD ["yarn","build"]

# Remove node modules and only keep the dist folder
RUN rm -rf /usr/src/app/node_modules 

# Install production mode
RUN yarn install --production

CMD ["yarn","start"]
EXPOSE 3000