/*
  Warnings:

  - Added the required column `des_coddin` to the `hos_des_employee_discounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hos_des_employee_discounts" ADD COLUMN     "des_coddin" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "hos_des_employee_discounts" ADD CONSTRAINT "hos_des_din_fk" FOREIGN KEY ("des_coddin") REFERENCES "hos_din_discount_institutions"("din_code") ON DELETE NO ACTION ON UPDATE NO ACTION;
