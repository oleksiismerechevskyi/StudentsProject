export interface UserUpdateDto {
    username: string,
    oldPassword: string,
    password: string,
    confirmPassword: string,
    class_id: number
}