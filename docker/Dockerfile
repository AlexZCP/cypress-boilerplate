FROM cypress/base:16.14.0
LABEL maintainer="az@cloudprinter.com"

WORKDIR /cypress

#VOLUME ./cypress-boilerplate /cypress
COPY ./cypress-boilerplate /cypress

#RUN ls /cypress
RUN npm install 

# Cpying code from local context
#ARG x-auth-s=
#ARG x-auth-u=

RUN npm run silent:api