FROM node:24-alpine

WORKDIR /app

# Install Angular CLI globally so 'ng' command works
RUN npm install -g @angular/cli

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose the default Angular port
EXPOSE 4200

# ... (previous setup)
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200", "--proxy-config", "proxy.conf.json", "--poll", "2000"]
