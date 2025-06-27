# ==== STAGE 1: Build ====
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY next.config.ts ./
COPY tailwind.config.ts ./

RUN npm install

COPY . .

# RUN NEXTJS_IGNORE_ESLINT=true NEXTJS_IGNORE_TYPECHECK=true npm run build -- --no-lint

# ==== STAGE 2: Production runtime ====
FROM node:20-alpine

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.ts ./
# COPY --from=builder /app/.env.local ./.env.local

EXPOSE 3000

CMD ["npm", "run", "dev"]
