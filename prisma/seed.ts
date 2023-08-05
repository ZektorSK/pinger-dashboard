import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@admin.com' },
    update: {
      email: 'admin@admin.com',
      username: 'Admin',
      password: await bcrypt.hash('admin123', 10),
    },
    create: {
      email: 'admin@admin.com',
      username: 'Admin',
      password: await bcrypt.hash('admin123', 10),
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
