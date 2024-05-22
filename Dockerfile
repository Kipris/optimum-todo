FROM node:16 as build
WORKDIR /app

COPY client/package*.json ./client/
COPY server/package*.json ./server/
RUN npm --prefix ./client install && \
    npm --prefix ./server install && \
    npm cache clean --force

COPY client/ ./client/
COPY server/ ./server/
RUN npm --prefix ./client run build:prod && \
    npm --prefix ./server run build

FROM node:16-alpine
WORKDIR /app

COPY --from=build /app/client/build ./client/build
COPY --from=build /app/server/build ./server/build

COPY --from=build /app/server/package*.json ./
RUN npm install --only=production

RUN npm install -g serve

EXPOSE 3000 8000

CMD ["sh", "-c", "serve -s client/build -l 8000 & node server/build/index.mjs"]
