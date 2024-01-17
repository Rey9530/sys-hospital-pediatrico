import { Controller, Get, Post, Body, Param, Delete, Put, ParseUUIDPipe } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth, GetUser } from '../auth/decorators';
import { HEADER_API_BEARER_AUTH } from 'src/common/const';
import { hos_usr_usuario } from '@prisma/client';

@ApiTags('Employees')
@Controller('v1/employees')
@Auth()
@ApiBearerAuth(HEADER_API_BEARER_AUTH)
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) { }

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto, @GetUser() user: hos_usr_usuario) {
    return this.employeesService.create(createEmployeeDto, user);
  }

  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.employeesService.findOne(id);
  }

  @Get('get/catalogs')
  getCatalogs() {
    return this.employeesService.getCatalogs();
  }


  @Put(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateEmployeeDto: UpdateEmployeeDto, @GetUser() user: hos_usr_usuario) {
    return this.employeesService.update(id, updateEmployeeDto, user);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.employeesService.remove(id);
  }
}
