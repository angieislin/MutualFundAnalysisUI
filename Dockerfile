# Dockerfile
# Stage 1: Build the React app
FROM node:14 AS builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY my-frontend-project.conf /etc/nginx/conf.d/

# Expose the port the app runs on
EXPOSE 8087

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
