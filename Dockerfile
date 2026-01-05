# Build stage
FROM node:20-alpine as builder
WORKDIR /app

# Install Prisma dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy Prisma files
COPY prisma ./prisma

# Set a dummy DATABASE_URL for build
ENV DATABASE_URL=postgresql://dummy:password@dummy:5432/dummy

# Generate Prisma client
RUN npx prisma generate

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Production image
FROM node:20-alpine
WORKDIR /app

# Install system dependencies for Prisma
RUN apk add --no-cache openssl

# Copy package files and install only production dependencies
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev && npm cache clean --force

# Copy Prisma files and generate client
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/prisma ./prisma

# Copy built files from builder stage
COPY --from=builder /app/build ./build

# Copy entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# The actual DATABASE_URL will be provided at runtime
ENV DATABASE_URL=postgresql://user:pass@localhost:5432/db

# Generate Prisma client with the default URL (will be overridden at runtime)
RUN npx prisma generate

EXPOSE 3000

# Use the entrypoint script
ENTRYPOINT ["/entrypoint.sh"]