FROM mcr.microsoft.com/playwright:v1.46.0-focal

WORKDIR /app

# Copy only package files first for better caching
COPY package*.json ./
RUN npm ci --only=production

# Copy application code
COPY . .

# Install dev dependencies if needed for tests
RUN npm ci

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "console.log('healthy')" || exit 1

CMD ["npm", "test"]