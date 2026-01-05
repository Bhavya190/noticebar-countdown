# Build stage
FROM node:20-alpine as builder
WORKDIR /app

# Install Prisma dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy Prisma files
COPY prisma ./prisma

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Production image
FROM node:20-alpine
WORKDIR /app

# Copy package files and install only production dependencies
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev && npm cache clean --force

# Copy Prisma files and generate client
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/prisma ./prisma

# Copy built files from builder stage
COPY --from=builder /app/build ./build

# Install Prisma client
RUN npx prisma generate

EXPOSE 3000

# Run migrations and start the application
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]
