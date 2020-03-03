FROM node:12.7.0

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN npm install yarn -g 
RUN yarn install

# copy source files
COPY ./ /usr/src/app


RUN yarn build


EXPOSE 3000
CMD ["yarn","start"]