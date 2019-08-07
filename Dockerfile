FROM node:lts-slim
ENV APP_PATH /usr/app
# COPY . ${APP_PATH}
WORKDIR ${APP_PATH}
COPY ["package.json", "yarn.lock*", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# add `/usr/src/node_modules/.bin` to $PATH
ENV PATH ${APP_PATH}/node_modules/.bin:$PATH
COPY . .
RUN yarn
EXPOSE 3000
CMD yarn start


# FROM node:lts-slim
# ENV APP_PATH /usr/app
# COPY . ${APP_PATH}
# WORKDIR ${APP_PATH}
# RUN yarn
# # add `/usr/src/node_modules/.bin` to $PATH
# ENV PATH ${APP_PATH}/node_modules/.bin:$PATH
# EXPOSE 3000
# CMD yarn dev