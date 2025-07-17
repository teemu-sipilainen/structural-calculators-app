FROM node:22-alpine AS builder
RUN apk add --no-cache bash

WORKDIR /frontend

COPY ./frontend/*.json ./
COPY ./frontend/index.html ./
COPY ./frontend/vite.config.ts ./
COPY ./frontend/src ./src

RUN npm ci
RUN npm run build

WORKDIR /backend

COPY ./backend/*.json ./
COPY ./backend/src ./src

RUN npm ci
RUN npm run build

FROM node:22-alpine AS final
RUN apk add --no-cache bash

WORKDIR /app

ARG NODE_ENV
ARG PG_HOST
ARG PG_PORT
ARG PG_SSL
ARG PG_USERNAME
ARG PG_PASSWORD
ARG PG_DATABASE
ARG PORT
ARG SECRET

ENV NODE_ENV=${NODE_ENV}
ENV PG_HOST=${PG_HOST}
ENV PG_PORT=${PG_PORT}
ENV PG_SSL=${PG_SSL}
ENV PG_USERNAME=${PG_USERNAME}
ENV PG_PASSWORD=${PG_PASSWORD}
ENV PG_DATABASE=${PG_DATABASE}
ENV PORT=${PORT}
ENV SECRET=${SECRET}

COPY --from=builder ./backend/package*.json ./
COPY --from=builder ./backend/dist ./dist/server
COPY --from=builder ./frontend/dist ./dist/client

RUN npm ci --omit=dev

EXPOSE ${PORT}
CMD ["npm", "run", "start"]
