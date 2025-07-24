# Multi-stage Dockerfile for MERN Stack

# Stage 1: Build React app
FROM node:18-alpine AS client-build

WORKDIR /app/client

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY src/ ./src/
COPY public/ ./public/
COPY index.html ./
COPY vite.config.js ./
COPY postcss.config.js ./
COPY tailwind.config.js ./

# Build the React app
RUN npm run build

# Stage 2: Server setup
FROM node:18-alpine AS server

WORKDIR /app

# Install dependencies for server
COPY package*.json ./
RUN npm ci --only=production

# Copy server code
COPY server/ ./server/

# Copy built React app from client-build stage
COPY --from=client-build /app/client/dist ./public

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S node -u 1001
USER node

# Expose port
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node server/healthcheck.js

# Start the server
CMD ["node", "server/server.js"]