import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: process.env.SEED_MAIL },
    update: {
      email: process.env.SEED_MAIL,
      username: process.env.SEED_USERNAME,
      password: await bcrypt.hash(process.env.SEED_PASSWORD, 10),
    },
    create: {
      email: process.env.SEED_MAIL,
      username: process.env.SEED_USERNAME,
      password: await bcrypt.hash(process.env.SEED_PASSWORD, 10),
    },
  });

  console.log({ admin });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
