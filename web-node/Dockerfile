FROM node:18-alpine
WORKDIR /app

# Copiar solo package.json para aprovechar la caché
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

EXPOSE 3000
CMD ["node", "server.js"]