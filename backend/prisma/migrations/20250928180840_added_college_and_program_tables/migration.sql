-- CreateTable
CREATE TABLE "public"."College" (
    "college_id" SERIAL NOT NULL,
    "college_name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "pincode" TEXT NOT NULL,

    CONSTRAINT "College_pkey" PRIMARY KEY ("college_id")
);

-- CreateTable
CREATE TABLE "public"."Department" (
    "department_id" SERIAL NOT NULL,
    "department_name" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("department_id")
);

-- CreateTable
CREATE TABLE "public"."Program" (
    "program_id" SERIAL NOT NULL,
    "department_id" INTEGER NOT NULL,
    "college_id" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,

    CONSTRAINT "Program_pkey" PRIMARY KEY ("program_id")
);

-- CreateTable
CREATE TABLE "public"."Seat_Matrix" (
    "program_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "total_seats" INTEGER NOT NULL,

    CONSTRAINT "Seat_Matrix_pkey" PRIMARY KEY ("program_id","category_id")
);

-- AddForeignKey
ALTER TABLE "public"."Program" ADD CONSTRAINT "Program_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "public"."Department"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Program" ADD CONSTRAINT "Program_college_id_fkey" FOREIGN KEY ("college_id") REFERENCES "public"."College"("college_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Seat_Matrix" ADD CONSTRAINT "Seat_Matrix_program_id_fkey" FOREIGN KEY ("program_id") REFERENCES "public"."Program"("program_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Seat_Matrix" ADD CONSTRAINT "Seat_Matrix_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;
