FROM node:8

COPY package.json package.json
RUN npm install

EXPOSE 4040

COPY . .
RUN npm run build

CMD ["node", "dist/"]
