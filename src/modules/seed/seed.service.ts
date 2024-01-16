import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/common/services';
import * as bcrypt from 'bcrypt'; 

@Injectable()
export class SeedService {
  private readonly logger = new Logger('UsersService');

  constructor(private readonly prisma: PrismaService) {}
  async deleteSeed() {
    await this.prisma.hos_usr_usuario.deleteMany(); 
    await this.prisma.hos_gen_genders.deleteMany();
    await this.prisma.hos_lad_labor_department.deleteMany();
    await this.prisma.hos_jti_job_title.deleteMany();
    await this.prisma.hos_wst_work_status.deleteMany();
  }

  async executeSeed() {
    try {
      await this.deleteSeed();
      var cremod = 'Creado por el seeder';
      var data: any = {
        usr_code_employe: '9505002',
        usr_names: 'Reynaldo Alexander',
        usr_surnames: 'Ruiz Rosales',
        usr_password: bcrypt.hashSync('9505002', 10),
        usr_attempts_faile: 0,
        usr_status: 'ACTIVE',
        usr_user_create: cremod,
        usr_usrer_update: cremod,
      };
      await this.prisma.hos_usr_usuario.create({
        data: data,
      }); 
      await this.prisma.hos_gen_genders.create({
        data: {
          gen_name: 'Masculino',
        },
      }); 
      await this.prisma.hos_gen_genders.create({ 
        data: {
          gen_name: 'Femenino',
        },
      });

      await this.prisma.hos_lad_labor_department.createMany({
        data: [
          {   lad_name: 'ADMINISTRATIVO', },
          {   lad_name: 'OPERARIOS', },
          {   lad_name: 'OBREROS', },
          {   lad_name: 'PROFESIONALES', },
          {   lad_name: 'TECNICOS', },
        ]
      });

      await this.prisma.hos_jti_job_title.createMany({
        data: [
          {   jti_name : 'Tipo 1', },
          {   jti_name : 'Tipo 2', },
          {   jti_name : 'Tipo 3', }, 
        ]
      });
      
      await this.prisma.hos_wst_work_status.createMany({
        data: [
          {   wst_name : 'Estado 1', },  
          {   wst_name : 'Estado 2', },  
          {   wst_name : 'Estado 3', },  
        ]
      });
    } catch (error) {
      console.log(error);
    }
  }
}
