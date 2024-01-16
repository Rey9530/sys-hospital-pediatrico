import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { FORMAT_FECHA_DD_MM_YYYY } from 'src/common/const';

export class CreateEmployeeDto { 
  @ApiProperty({
    description: 'Codigo de usuario (unique)',
    nullable: false,
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  emp_code_employee:string;

  @ApiProperty({})
  @IsString()
  @MinLength(2)
  emp_first_name:string;

  @ApiProperty({})
  @IsString()
  @MinLength(2)
  emp_second_name:string;

  @ApiProperty({})
  @IsString()
  @MinLength(2)
  emp_third_name:string;

  @ApiProperty({})
  @IsString()
  @MinLength(2)
  emp_first_surname:string;

  @ApiProperty({})
  @IsString()
  @MinLength(2)
  emp_second_surname:string;

  @ApiProperty({})
  @IsString()
  @MinLength(2)
  @IsOptional()
  emp_married_surname:string;

  @ApiProperty({})
  @IsString()
  @MinLength(2)
  emp_codgen:string;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  @Matches(FORMAT_FECHA_DD_MM_YYYY, {
    message: 'La fecha de nacimiento es incorrecta debe ser  YYYY-mm-dd',
  })
  @IsOptional()
  emp_birth_date:string;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  @Matches(FORMAT_FECHA_DD_MM_YYYY, {
    message: 'La fecha de inicio es incorrecta debe ser  YYYY-mm-dd',
  })
  @IsOptional()
  emp_admission_date:string;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  @Matches(FORMAT_FECHA_DD_MM_YYYY, {
    message: 'La fecha de salida es incorrecta debe ser  YYYY-mm-dd',
  })
  @IsOptional()
  emp_departure_date:string;

  @ApiProperty({})
  @IsString()
  @MinLength(2)
  @IsOptional()
  emp_address:string;

  @ApiProperty({})
  @IsString()
  @MinLength(8)
  @IsOptional()
  emp_cel_phone:string;

  @ApiProperty({})
  @IsString()
  @MinLength(8)
  @IsOptional()
  emp_dui:string;

  @ApiProperty({})
  @IsString()
  @MinLength(8)
  @IsOptional()
  emp_nit:string;

  @ApiProperty({})
  @IsString()
  @MinLength(8)
  @IsOptional()
  emp_isss:string;

  @ApiProperty({})
  @IsString()
  @MinLength(8)
  @IsOptional()
  emp_afp:string;

  @ApiProperty({})
  @IsNumber()
  @IsPositive()
  @IsOptional()
  emp_hourly_wage:number;

  @ApiProperty({})
  @IsNumber()
  @IsPositive()
  @IsOptional()
  emp_daily_wage:number;

  @ApiProperty({})
  @IsNumber()
  @IsPositive()
  @IsOptional()
  emp_base_salary:number;

  @ApiProperty({})
  @IsNumber()
  @IsPositive()
  @IsOptional()
  emp_viatic:number;

  @ApiProperty({})
  @IsNumber()
  @IsPositive()
  @IsOptional()
  emp_complementary_diatic:number;

  @ApiProperty({})
  @IsNumber()
  @IsPositive()
  emp_codlad:string;

  @ApiProperty({})
  @IsNumber()
  @IsPositive()
  emp_codjti:string;
  
  @ApiProperty({})
  @IsNumber()
  @IsPositive()
  emp_codwst:string;

  @ApiProperty({})
  @IsNumber()
  @IsPositive()
  @IsOptional()
  emp_codempboss:string;

}
