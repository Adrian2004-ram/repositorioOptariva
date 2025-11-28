# Etapa 1: build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

# Etapa 2: runtime
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 8080
CMD ["node", "server.js"]