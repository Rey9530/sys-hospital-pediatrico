-- AlterTable
ALTER TABLE "hos_usr_usuario" RENAME CONSTRAINT "mar_usr_pk" TO "hos_usr_pk";

-- CreateTable
CREATE TABLE "hos_emp_employees" (
    "emp_code" TEXT NOT NULL,
    "emp_code_employee" TEXT NOT NULL,
    "emp_first_name" TEXT NOT NULL,
    "emp_second_name" TEXT NOT NULL,
    "emp_third_name" TEXT NOT NULL,
    "emp_first_surname" TEXT NOT NULL,
    "emp_second_surname" TEXT NOT NULL,
    "emp_married_surname" TEXT,
    "emp_codgen" TEXT NOT NULL,
    "emp_birth_date" DATE,
    "emp_admission_date" DATE,
    "emp_departure_date" DATE,
    "emp_address" TEXT,
    "emp_cel_phone" TEXT,
    "emp_dui" TEXT,
    "emp_nit" TEXT,
    "emp_isss" TEXT,
    "emp_afp" TEXT,
    "emp_hourly_wage" DECIMAL(10,2) DEFAULT 0,
    "emp_daily_wage" DECIMAL(10,2) DEFAULT 0,
    "emp_base_salary" DECIMAL(10,2) DEFAULT 0,
    "emp_viatic" DECIMAL(10,2) DEFAULT 0,
    "emp_complementary_diatic" DECIMAL(10,2) DEFAULT 0,
    "emp_codlad" TEXT NOT NULL,
    "emp_codjti" TEXT NOT NULL,
    "emp_codwst" TEXT NOT NULL,
    "emp_codempboss" TEXT,
    "emp_status" "Estado" NOT NULL DEFAULT 'ACTIVE',
    "emp_date_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "emp_date_update" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hos_emp_pk" PRIMARY KEY ("emp_code")
);

-- CreateTable
CREATE TABLE "hos_gen_genders" (
    "gen_code" TEXT NOT NULL,
    "gen_name" TEXT NOT NULL,
    "gen_status" "Estado" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "hos_gen_pk" PRIMARY KEY ("gen_code")
);

-- CreateTable
CREATE TABLE "hos_lad_labor_department" (
    "lad_code" TEXT NOT NULL,
    "lad_name" TEXT NOT NULL,
    "lad_status" "Estado" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "hos_lad_pk" PRIMARY KEY ("lad_code")
);

-- CreateTable
CREATE TABLE "hos_jti_job_title" (
    "jti_code" TEXT NOT NULL,
    "jti_name" TEXT NOT NULL,
    "jti_status" "Estado" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "hos_jti_pk" PRIMARY KEY ("jti_code")
);

-- CreateTable
CREATE TABLE "hos_wst_work_status" (
    "wst_code" TEXT NOT NULL,
    "wst_name" TEXT NOT NULL,
    "wst_status" "Estado" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "hos_wst_pk" PRIMARY KEY ("wst_code")
);

-- AddForeignKey
ALTER TABLE "hos_emp_employees" ADD CONSTRAINT "mar_emp_gen_fk" FOREIGN KEY ("emp_codgen") REFERENCES "hos_gen_genders"("gen_code") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "hos_emp_employees" ADD CONSTRAINT "mar_emp_lad_fk" FOREIGN KEY ("emp_codlad") REFERENCES "hos_lad_labor_department"("lad_code") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "hos_emp_employees" ADD CONSTRAINT "mar_emp_jti_fk" FOREIGN KEY ("emp_codjti") REFERENCES "hos_jti_job_title"("jti_code") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "hos_emp_employees" ADD CONSTRAINT "mar_emp_wst_fk" FOREIGN KEY ("emp_codwst") REFERENCES "hos_wst_work_status"("wst_code") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "hos_emp_employees" ADD CONSTRAINT "mar_emp_cod_fk" FOREIGN KEY ("emp_codempboss") REFERENCES "hos_emp_employees"("emp_code") ON DELETE NO ACTION ON UPDATE NO ACTION;
