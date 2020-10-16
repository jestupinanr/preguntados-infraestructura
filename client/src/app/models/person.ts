export interface personForm{
    auto?: number;
    nombre?: string,
    nickName?: string,
    correo?: string,
    carrera?: string,
    id_imagen:string,
    create_at?: Date
}
export interface personSignIn{
    username?: string;
    password?: string
}