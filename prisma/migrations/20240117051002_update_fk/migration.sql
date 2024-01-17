-- RenameForeignKey
ALTER TABLE "hos_emp_employees" RENAME CONSTRAINT "mar_emp_gen_fk" TO "hos_emp_gen_fk";

-- RenameForeignKey
ALTER TABLE "hos_emp_employees" RENAME CONSTRAINT "mar_emp_jti_fk" TO "hos_emp_jti_fk";

-- RenameForeignKey
ALTER TABLE "hos_emp_employees" RENAME CONSTRAINT "mar_emp_lad_fk" TO "hos_emp_lad_fk";

-- RenameForeignKey
ALTER TABLE "hos_emp_employees" RENAME CONSTRAINT "mar_emp_usr_fk" TO "hos_emp_usr_fk";

-- RenameForeignKey
ALTER TABLE "hos_emp_employees" RENAME CONSTRAINT "mar_emp_wst_fk" TO "hos_emp_wst_fk";

-- AddForeignKey
ALTER TABLE "hos_emp_employees" ADD CONSTRAINT "hos_emp_cod_fk" FOREIGN KEY ("emp_codempboss") REFERENCES "hos_emp_employees"("emp_code") ON DELETE NO ACTION ON UPDATE NO ACTION;
