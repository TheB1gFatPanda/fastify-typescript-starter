FROM node:18-alpine


# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

RUN npm install

# Copy the remaining files to the container
COPY . .

# Generate prisma client
RUN npm run prisma:generate:prod

RUN npm run prisma:migrate:prod

ENV NODE_ENV=production

EXPOSE 3001

CMD ["npm", "run", "start"]