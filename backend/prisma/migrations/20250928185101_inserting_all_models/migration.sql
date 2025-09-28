-- CreateEnum
CREATE TYPE "public"."gender" AS ENUM ('male', 'female');

-- CreateEnum
CREATE TYPE "public"."status" AS ENUM ('float', 'freeze', 'withdrawn');

-- CreateEnum
CREATE TYPE "public"."rankType" AS ENUM ('general', 'category');

-- CreateTable
CREATE TABLE "public"."Admin" (
    "admin_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("admin_id")
);

-- CreateTable
CREATE TABLE "public"."Student" (
    "student_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "mobile_number" TEXT NOT NULL,
    "gender" "public"."gender" NOT NULL,
    "current_status" "public"."status" NOT NULL DEFAULT 'float',
    "isRegistered" BOOLEAN NOT NULL DEFAULT false,
    "general_rank" BIGINT NOT NULL,
    "category_rank" BIGINT NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("student_id")
);

-- CreateTable
CREATE TABLE "public"."Preferences" (
    "student_id" INTEGER NOT NULL,
    "preference_number" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "program_id" INTEGER NOT NULL,

    CONSTRAINT "Preferences_pkey" PRIMARY KEY ("student_id","program_id")
);

-- CreateTable
CREATE TABLE "public"."Round" (
    "round_number" SERIAL NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_time" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "Round_pkey" PRIMARY KEY ("round_number")
);

-- CreateTable
CREATE TABLE "public"."Allocation_Status" (
    "student_id" INTEGER NOT NULL,
    "program_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "rank_value_used" BIGINT NOT NULL,
    "rank_type_used" "public"."rankType" NOT NULL,
    "round_id" INTEGER NOT NULL,

    CONSTRAINT "Allocation_Status_pkey" PRIMARY KEY ("student_id","program_id","category_id","round_id")
);

-- CreateTable
CREATE TABLE "public"."CutOff_ranks" (
    "cutOff_id" SERIAL NOT NULL,
    "program_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "closing_rank" BIGINT NOT NULL,
    "opening_rank" BIGINT NOT NULL,
    "round_id" INTEGER NOT NULL,

    CONSTRAINT "CutOff_ranks_pkey" PRIMARY KEY ("cutOff_id")
);

-- AddForeignKey
ALTER TABLE "public"."Student" ADD CONSTRAINT "Student_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Preferences" ADD CONSTRAINT "Preferences_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "public"."Student"("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Preferences" ADD CONSTRAINT "Preferences_program_id_fkey" FOREIGN KEY ("program_id") REFERENCES "public"."Program"("program_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Allocation_Status" ADD CONSTRAINT "Allocation_Status_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "public"."Student"("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Allocation_Status" ADD CONSTRAINT "Allocation_Status_program_id_fkey" FOREIGN KEY ("program_id") REFERENCES "public"."Program"("program_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Allocation_Status" ADD CONSTRAINT "Allocation_Status_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Allocation_Status" ADD CONSTRAINT "Allocation_Status_round_id_fkey" FOREIGN KEY ("round_id") REFERENCES "public"."Round"("round_number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CutOff_ranks" ADD CONSTRAINT "CutOff_ranks_program_id_fkey" FOREIGN KEY ("program_id") REFERENCES "public"."Program"("program_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CutOff_ranks" ADD CONSTRAINT "CutOff_ranks_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CutOff_ranks" ADD CONSTRAINT "CutOff_ranks_round_id_fkey" FOREIGN KEY ("round_id") REFERENCES "public"."Round"("round_number") ON DELETE RESTRICT ON UPDATE CASCADE;
