import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class CreateUserDto {
    @ApiProperty({ description: 'Email do usuário' })
    @IsEmail()
    @IsNotEmpty()
    email: string
    @IsString()
    @IsNotEmpty()
    name: string
    @IsBoolean()
    admin: boolean
}
