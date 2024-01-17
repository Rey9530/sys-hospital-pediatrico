import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { hos_usr_usuario } from '@prisma/client';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/common/services';
import { convert_date } from 'src/common/helpers';

@Injectable()
export class EmployeesService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }
  async create(createEmployeeDto: CreateEmployeeDto, hos_usr_usuario: hos_usr_usuario) {
    var { emp_birth_date, emp_admission_date, emp_departure_date, ...respto }: any = createEmployeeDto;
    emp_birth_date = convert_date(emp_birth_date);
    emp_admission_date = convert_date(emp_admission_date);
    emp_departure_date = convert_date(emp_departure_date);

    const [
      hos_gen_genders,
      hos_lad_labor_department,
      hos_jti_job_title,
      hos_wst_work_status,
    ] = await Promise.all([
      await this.prisma.hos_gen_genders.findFirst({ where: { gen_code: respto.emp_codgen } }),
      await this.prisma.hos_lad_labor_department.findFirst({ where: { lad_code: respto.emp_codlad } }),
      await this.prisma.hos_jti_job_title.findFirst({ where: { jti_code: respto.emp_codjti } }),
      await this.prisma.hos_wst_work_status.findFirst({ where: { wst_code: respto.emp_codws } }),
    ]);
    if (!hos_gen_genders) throw new NotFoundException('El genero no es valido');
    if (!hos_lad_labor_department) throw new NotFoundException('El departamento no es valido');
    if (!hos_jti_job_title) throw new NotFoundException('El titulo de trabajo no es valido');
    if (!hos_wst_work_status) throw new NotFoundException('El estado de trabajo es valido');
    var boss;
    if (respto.emp_codempboss != null) {
      boss = await this.prisma.hos_emp_employees.findFirst({ where: { emp_code: respto.emp_codempboss } })
      if (!boss) throw new NotFoundException('El jefe inmediato no es valido');
    }
    delete respto.emp_codempboss;
    try {
      var data = {
        emp_birth_date, emp_admission_date, emp_departure_date,
        ...respto,
        emp_codusr: hos_usr_usuario.usr_code,
        emp_codempboss: boss != null ? boss.emp_code : null
      };
      var db = await this.prisma.hos_emp_employees.create({
        data
      });
    } catch (error) {
      throw new InternalServerErrorException(error.response.message)
    }
    return db;
  }

  async findAll() {
    return this.prisma.hos_emp_employees.findMany({ where: { emp_status: 'ACTIVE' } });
  }

  async findOne(term: string) {
    let resp = await this.prisma.hos_emp_employees.findFirst({
      where: { emp_code: term, emp_status: 'ACTIVE' },
    });
    if (!resp)
      throw new NotFoundException(`Empleado con el id ${term} no encontrada`);
    return resp;
  }
  async getCatalogs() {
    const [
      hos_gen_genders,
      hos_lad_labor_department,
      hos_jti_job_title,
      hos_wst_work_status,
    ] = await Promise.all([
      await this.prisma.hos_gen_genders.findMany({ where: { gen_status: 'ACTIVE' } }),
      await this.prisma.hos_lad_labor_department.findMany({ where: { lad_status: 'ACTIVE' } }),
      await this.prisma.hos_jti_job_title.findMany({ where: { jti_status: 'ACTIVE' } }),
      await this.prisma.hos_wst_work_status.findMany({ where: { wst_status: 'ACTIVE' } }),
    ]);
    return {
      hos_gen_genders,
      hos_lad_labor_department,
      hos_jti_job_title,
      hos_wst_work_status
    };
  }
  async update(id: string, updateEmployeeDto: UpdateEmployeeDto, hos_usr_usuario: hos_usr_usuario) {
    await this.findOne(id);
    var { emp_birth_date, emp_admission_date, emp_departure_date, ...respto }: any = updateEmployeeDto;
    emp_birth_date = convert_date(emp_birth_date);
    emp_admission_date = convert_date(emp_admission_date);
    emp_departure_date = convert_date(emp_departure_date);

    const [
      hos_gen_genders,
      hos_lad_labor_department,
      hos_jti_job_title,
      hos_wst_work_status,
    ] = await Promise.all([
      await this.prisma.hos_gen_genders.findFirst({ where: { gen_code: respto.emp_codgen } }),
      await this.prisma.hos_lad_labor_department.findFirst({ where: { lad_code: respto.emp_codlad } }),
      await this.prisma.hos_jti_job_title.findFirst({ where: { jti_code: respto.emp_codjti } }),
      await this.prisma.hos_wst_work_status.findFirst({ where: { wst_code: respto.emp_codws } }),
    ]);
    if (!hos_gen_genders) throw new NotFoundException('El genero no es valido');
    if (!hos_lad_labor_department) throw new NotFoundException('El departamento no es valido');
    if (!hos_jti_job_title) throw new NotFoundException('El titulo de trabajo no es valido');
    if (!hos_wst_work_status) throw new NotFoundException('El estado de trabajo es valido');
    var boss;
    if (respto.emp_codempboss != null) {
      boss = await this.prisma.hos_emp_employees.findFirst({ where: { emp_code: respto.emp_codempboss } })
      if (!boss) throw new NotFoundException('El jefe inmediato no es valido');
    }
    delete respto.emp_codempboss;
    try {
      var data = {
        emp_birth_date, emp_admission_date, emp_departure_date,
        ...respto,
        emp_codusr: hos_usr_usuario.usr_code,
        emp_codempboss: boss != null ? boss.emp_code : null
      };
      var db = await this.prisma.hos_emp_employees.update({
        where: {
          emp_code: id
        },
        data
      });
    } catch (error) {
      throw new InternalServerErrorException(error.response.message)
    }
    return db;
  }

  async remove(id: string) {
    const resp = await this.findOne(id);
    await this.prisma.hos_emp_employees.update({
      where: { emp_code: resp.emp_code },
      data: { emp_status: 'INACTIVE' },
    });
  }
}
