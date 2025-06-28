# syntax=docker/dockerfile:1

FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy code
COPY . .

# Expose port and start in dev mode
EXPOSE 3000
CMD ["npm", "run", "dev"]
