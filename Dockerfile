FROM node:20-slim AS runtime
WORKDIR /app
COPY ./.next /app/.next
EXPOSE 3000
CMD ["npm", "start"]
