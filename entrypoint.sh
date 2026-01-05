#!/bin/sh
set -e

# Run migrations if DATABASE_URL is set
if [ -n "$DATABASE_URL" ]; then
  echo "Running database migrations..."
  npx prisma migrate deploy
else
  echo "WARNING: DATABASE_URL is not set, skipping migrations"
fi

# Start the application
echo "Starting application..."
exec npx react-router-serve ./build/server/index.js