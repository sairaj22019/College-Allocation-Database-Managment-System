# Prisma Cheat Sheet

## 1. Project & Setup
```bash
# Initialize Prisma
npx prisma init

# Generate Prisma Client
npx prisma generate

# Apply schema changes with a named migration\mnpx prisma migrate dev --name <migration_name>

# Deploy migrations in production
npx prisma migrate deploy

# Pull database schema into schema.prisma
npx prisma db pull

# Push schema changes to DB without migration
npx prisma db push
```

## 2. Database Operations
```bash
# Seed the database
npx prisma db seed

# Reset the database (drops all data, reapplies migrations, optional seed)
npx prisma migrate reset

# Open Prisma Studio (GUI to view/edit DB)
npx prisma studio
```

## 3. Introspection & Info
```bash
# Generate schema from existing DB
npx prisma introspect

# Show Prisma CLI version
npx prisma -v

# Format schema.prisma
npx prisma format
```

## 4. Migrations
```bash
# Create and apply migration during development
npx prisma migrate dev

# Check migration status
npx prisma migrate status

# Mark a migration as applied without running it
npx prisma migrate resolve --applied <migration_name>
```

## 5. Prisma Client Queries (JavaScript / TypeScript)
```ts
// Find all records
const users = await prisma.user.findMany();

// Find a single record by unique key
const user = await prisma.user.findUnique({ where: { id: 1 } });

// Create a new record
const newUser = await prisma.user.create({ data: { name: 'Alice', email: 'alice@example.com' } });

// Update a record
const updatedUser = await prisma.user.update({ where: { id: 1 }, data: { name: 'Bob' } });

// Delete a record
const deletedUser = await prisma.user.delete({ where: { id: 1 } });

// Upsert (create or update)
const upsertUser = await prisma.user.upsert({ where: { email: 'alice@example.com' }, update: { name: 'Alice Updated' }, create: { name: 'Alice', email: 'alice@example.com' } });
```

## 6. Advanced Queries
```ts
// Run raw SQL from code
const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${userId}`;

// Execute raw SQL (non-returning)
await prisma.$executeRaw`UPDATE User SET name = 'Charlie' WHERE id = ${userId}`;

// Transaction (atomic operations)
await prisma.$transaction([
  prisma.user.update({ where: { id: 1 }, data: { name: 'A' } }),
  prisma.post.create({ data: { title: 'Hello', userId: 1 } })
]);
```

## 7. Example Model in `schema.prisma`
```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  createdAt DateTime @default(now())
}
```

---
*This file can be used as a day-to-day Prisma syntax reference.*

