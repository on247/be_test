FROM node:20

# Working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package.json
COPY package-lock.json package-lock.json

# Install node modules
RUN npm install

# Copy files to the container
COPY . .

# Run the application
COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["node","/app/src/fetch.js"]