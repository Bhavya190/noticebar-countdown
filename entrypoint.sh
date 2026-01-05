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
exec npx react-router-serve ./build/server/index.js