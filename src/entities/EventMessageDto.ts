export interface EventMessageDto {
    url: string,
    action: string,
    userId: string,
    method?: string,
    message?: string,
}