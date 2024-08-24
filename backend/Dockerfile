# Stage 1: Build the application
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the entire application to the working directory
COPY . .

# Stage 2: Create the production image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy the application and node_modules from the build stage
COPY --from=build /app /app

# Expose the port your app runs on
EXPOSE 3000

# Set environment variables (if needed)
ENV NODE_ENV=production

# Run the application
CMD ["node", "src/server.js"]