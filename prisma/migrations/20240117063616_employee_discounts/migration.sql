-- CreateEnum
CREATE TYPE "EstadoDescuento" AS ENUM ('ACTIVE', 'CANCELED');

-- CreateTable
CREATE TABLE "hos_des_employee_discounts" (
    "des_code" TEXT NOT NULL,
    "des_reference" TEXT NOT NULL,
    "emp_strat_date" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "des_number_installments" INTEGER NOT NULL DEFAULT 0,
    "des_total_amount" DECIMAL(10,2) DEFAULT 0,
    "des_codemp" TEXT NOT NULL,
    "des_status" "EstadoDescuento" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "hos_des_pk" PRIMARY KEY ("des_code")
);

-- CreateTable
CREATE TABLE "hos_din_discount_institutions" (
    "din_code" TEXT NOT NULL,
    "din_name" TEXT NOT NULL,
    "din_status" "Estado" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "hos_din_pk" PRIMARY KEY ("din_code")
);

-- AddForeignKey
ALTER TABLE "hos_des_employee_discounts" ADD CONSTRAINT "hos_des_emp_fk" FOREIGN KEY ("des_codemp") REFERENCES "hos_emp_employees"("emp_code") ON DELETE NO ACTION ON UPDATE NO ACTION;
