/*
  Warnings:

  - Added the required column `emp_codusr` to the `hos_emp_employees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hos_emp_employees" ADD COLUMN     "emp_codusr" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "hos_emp_employees" ADD CONSTRAINT "mar_emp_usr_fk" FOREIGN KEY ("emp_codusr") REFERENCES "hos_usr_usuario"("usr_code") ON DELETE NO ACTION ON UPDATE NO ACTION;
