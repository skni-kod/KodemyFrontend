FROM node:20-slim AS runtime
WORKDIR /app
COPY package.json package-lock.json ./
COPY .next /.next
RUN npm install --omit=dev
EXPOSE 3000
CMD ["npm", "start"]
