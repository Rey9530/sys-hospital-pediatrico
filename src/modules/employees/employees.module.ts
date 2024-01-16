import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService],
  imports: [AuthModule],
})
export class EmployeesModule {}
