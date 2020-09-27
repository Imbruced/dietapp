FROM node:12-alpine

RUN mkdir -p /app/frontend
COPY ./package.json /app/frontend
WORKDIR /app/frontend
RUN (cd /app/frontend;npm install)
RUN cat /app/frontend/package.json

EXPOSE 3000
CMD ["npm", "start"]