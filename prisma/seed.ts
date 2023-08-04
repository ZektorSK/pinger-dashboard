import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@admin.com' },
    update: {
      email: 'admin@admin.com',
      username: 'Admin',
      password: 'admin123',
    },
    create: {
      email: 'admin@admin.com',
      username: 'Admin',
      password: 'admin123',
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
