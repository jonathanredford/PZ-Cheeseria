#############
# BUILD FOR LOCAL DEVELOPMENT
#############

# Base image
FROM node:18-alpine As development

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to working directory
COPY --chown=node:node package*.json ./

# Copy static assets to working directory
COPY --chown=node:node public ./

# Install app dependencies
RUN npm ci

# Bundle app source
COPY --chown=node:node . .

# Use the node user from the image
USER node

#############
# BUILD FOR PRODUCTION
#############

FROM node:18-alpine As build

WORKDIR /usr/src/app

# Copy package.json and package-lock.json to working directory
COPY --chown=node:node package*.json ./

# Copy static assets to working directory
COPY --chown=node:node public ./

# Copy over the node_modules directory from the development image in order to access the Nest CLI
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

# Create the production bundle
RUN npm run build

# Set NODE_ENV environment variable
ENV NODE_ENV production

# Clean install only production dependencies
RUN npm ci --only=production && npm cache clean --force

USER node

#############
# PRODUCTION
#############

FROM node:18-alpine As production

# Copy the bundled code from the build stage to the production image
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/public ./public

# Expose port 3001
EXPOSE 3001

# Start the server using the production build
CMD [ "node", "dist/main.js" ]