# -------------------------
# 1. Builder Stage
# -------------------------
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


# -------------------------
# 2. Runner Stage
# -------------------------
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only the compiled JS and node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

# Run as non-root user for security
USER node

EXPOSE 3000

CMD ["node", "dist/server.js"]
