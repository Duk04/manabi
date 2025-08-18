# Prisma Setup for Manabi Japanese Course

This project now uses Prisma as the ORM for database operations, specifically for managing student registrations.

## What's Been Set Up

### 1. Prisma Configuration

- **Schema**: `prisma/schema.prisma` - Defines the database models
- **Client**: Generated in `app/generated/prisma/` - Type-safe database client
- **Database**: PostgreSQL hosted on Neon (configured in `.env`)

### 2. Database Models

The main model is `Registration` with the following fields:

- `id` - Unique identifier (CUID)
- `firstName`, `lastName` - Student's name
- `email` - Unique email address
- `phone` - Phone number
- `birthDate` - Date of birth
- `courseLevel` - Course level (Beginner, Intermediate, Advanced)
- `preferredSchedule` - Preferred class schedule
- `experience` - Previous Japanese experience (optional)
- `goals` - Learning goals (optional)
- `status` - Registration status (PENDING, APPROVED, REJECTED, COMPLETED)
- `createdAt`, `updatedAt` - Timestamps

### 3. API Endpoints

#### Registration API (`/api/register`)

- **POST**: Submit new registration
- **GET**: List all registrations (for public view)

#### Admin API (`/api/admin/registrations`)

- **GET**: List all registrations (admin only)
- **PATCH**: Update registration status (admin only)

### 4. Admin Dashboard

- **Route**: `/admin` - Admin panel for managing registrations
- **Features**: View, filter, and update registration statuses
- **Authentication**: Uses admin token from environment variables

## How to Use

### Development

1. **Start the development server**:

   ```bash
   npm run dev
   ```

2. **Database operations**:

   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run migrations
   npx prisma migrate dev

   # Reset database (development only)
   npx prisma migrate reset

   # View database in Prisma Studio
   npx prisma studio
   ```

### Testing the API

1. **Submit a registration**:

   ```bash
   curl -X POST http://localhost:3000/api/register \
     -H "Content-Type: application/json" \
     -d '{
       "firstName": "John",
       "lastName": "Doe",
       "email": "john@example.com",
       "phone": "97612345678",
       "birthDate": "1990-01-01",
       "courseLevel": "Beginner",
       "preferredSchedule": "Morning"
     }'
   ```

2. **View registrations as admin**:

   ```bash
   curl -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
     http://localhost:3000/api/admin/registrations
   ```

3. **Update registration status**:
   ```bash
   curl -X PATCH \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
     -d '{"id": "REGISTRATION_ID", "status": "APPROVED"}' \
     http://localhost:3000/api/admin/registrations
   ```

## Environment Variables

Make sure your `.env` file contains:

```env
DATABASE_URL="your_postgresql_connection_string"
ADMIN_TOKEN="your_secure_admin_token"
```

## Security Features

- Email uniqueness validation
- Phone number format validation (Mongolian format)
- Admin token authentication for admin operations
- Input validation and sanitization
- SQL injection protection through Prisma

## Database Schema

The database automatically creates the `registrations` table with proper indexes and constraints. The schema includes:

- Primary key on `id`
- Unique constraint on `email`
- Automatic timestamps
- Proper data types for all fields

## Troubleshooting

- If you get database connection errors, check your `DATABASE_URL` in `.env`
- If Prisma client generation fails, run `npx prisma generate`
- If there are schema mismatches, run `npx prisma migrate reset` (⚠️ **WARNING**: This will delete all data)
- For database issues, use `npx prisma studio` to inspect the database visually
