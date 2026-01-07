#!/bin/sh
set -e

echo "Checking DATABASE_URL..."
echo "DATABASE_URL: ${DATABASE_URL}"

# Run migrations if DATABASE_URL is set
if [ -n "$DATABASE_URL" ]; then
  echo "Running database migrations..."
  npx prisma migrate deploy
else
  echo "ERROR: DATABASE_URL is not set"
  exit 1
fi

# Start the application
echo "Starting application..."
# Use HOST=0.0.0.0 to listen on all network interfaces
# Use PORT from environment variable or default to 3000
HOST=0.0.0.0 PORT=${PORT:-3000} npx react-router-serve ./build/server/index.js