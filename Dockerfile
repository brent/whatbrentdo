FROM node:25-alpine AS base

RUN npm install -g pnpm
RUN apk update
RUN apk add python3

WORKDIR /app

FROM base AS builder

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

FROM base AS runner

COPY package.json pnpm-lock.yaml ./
RUN pnpm install -P --frozen-lockfile

COPY --from=builder /app/build build/

EXPOSE 3000
ENV NODE_ENV=production
CMD ["python3", "-m", "http.server", "-d", "build", "3000"]