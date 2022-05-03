FROM cypress/base:16.14.0
LABEL maintainer="az@cloudprinter.com"

WORKDIR /cypress

#VOLUME ./cypress-boilerplate /cypress
COPY ./cypress-boilerplate /cypress

#RUN ls /cypress
RUN npm install 

# Cpying code from local context
ARG x-auth-s=953e8839fc099b1ef01fc175e24b80edf61fbe0cebc316475af05c6b36dafbec
ARG x-auth-u=cb8a85846ec84b8d26f3b3fd2e8eedfd765930ab16419281a632e7dc5ab75173

RUN npm run silent:api