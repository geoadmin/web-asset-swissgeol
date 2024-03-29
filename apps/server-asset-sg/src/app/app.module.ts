import { HttpModule } from '@nestjs/axios';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetEditController } from './asset-edit/asset-edit.controller';
import { AssetEditService } from './asset-edit/asset-edit.service';
import { ContactEditController } from './contact-edit/contact-edit.controller';
import { ContactEditService } from './contact-edit/contact-edit.service';
import { JwtMiddleware } from './jwt/jwt-middleware';
import { OcrController } from './ocr/ocr.controller';
import { PrismaService } from './prisma/prisma.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
    imports: [HttpModule, ScheduleModule.forRoot()],
    controllers: [
        AppController,
        AdminController,
        UserController,
        AssetEditController,
        ContactEditController,
        OcrController,
    ],
    providers: [AppService, AdminService, PrismaService, UserService, AssetEditService, ContactEditService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(JwtMiddleware).exclude('api/ocr/(.*)').forRoutes('*');
    }
}
