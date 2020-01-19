# base image
FROM node:10.16.3-alpine

# set working directory
RUN mkdir -p /usr/src/"projectname"
WORKDIR /usr/src/"projectname"

# add `/usr/src/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/"projectname"/package.json
RUN npm install

# RUN npm install react-scripts -g
COPY . /usr/src/"projectname"
# ENV NODE_ENV="staging"

# example port
EXPOSE 4000 

# start app
# CMD ["npm", "test"]
RUN export NODE_ENV=production
CMD ["npm", "run", "productionserver"]