# Build stage
FROM node:20-alpine as builder
WORKDIR /app

# Install Prisma dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy Prisma files
COPY prisma ./prisma

# Set a dummy DATABASE_URL for build
ENV DATABASE_URL=postgresql://prisma_db_kpk7_user:JPuDF4QVsBRa3C3wW5olTJcCVph1Lqsp@dpg-d5bpnbfgi27c7390humg-a.virginia-postgres.render.com:5432/prisma_db_kpk7?sslmode=require

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

# The actual DATABASE_URL will be provided at runtime/
# ENV DATABASE_URL=postgresql://user:pass@localhost:5432/db

# Generate Prisma client with the default URL (will be overridden at runtime)
RUN npx prisma generate

EXPOSE 3000

# Use the entrypoint script
ENTRYPOINT ["/entrypoint.sh"]