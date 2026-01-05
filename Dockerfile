# 1. Build stage (on host, not in container) – we will skip this in Docker
# You already run `npm run build` on your machine.

# 2. Runtime image: just run the built server
FROM node:20-alpine

WORKDIR /app

# Only copy what is needed to run
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev && npm cache clean --force

# Copy prebuilt assets from host
COPY build ./build

EXPOSE 3000

CMD ["npm", "run", "docker-start"]
