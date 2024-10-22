# Use an existing node alpine image as a base image.
FROM node:19.5.0-alpine

# Create and define the node_modules's cache directory.
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy the package*.json files.
COPY package.json package-lock.json /app/

# RUN yarn install
RUN npm install --silent && npm i @fluentui/react-components && npm i react-router-dom

# Copy the rest of the application files.
COPY . .