# Gunakan image node versi terbaru sebagai base image
FROM node:latest

# Tentukan direktori kerja
WORKDIR /app

# Salin package.json dan yarn.lock ke dalam direktori kerja
COPY package.json yarn.lock ./

# Install dependensi menggunakan Yarn
RUN yarn install

# Salin seluruh kode proyek ke dalam direktori kerja
COPY . .

# Install Prisma CLI secara global
RUN yarn global add prisma

# Generate Prisma client
RUN prisma generate

# Jalankan build untuk aplikasi Next.js
RUN yarn build

# Jalankan aplikasi Next.js di mode production
CMD ["yarn", "start"]
