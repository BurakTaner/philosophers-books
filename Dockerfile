FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm i -g pnpm

RUN pnpm i

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["pnpm", "start"]
