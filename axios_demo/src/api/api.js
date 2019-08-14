import { post, get } from './http'

export const apiAddress = p => post('/user/get', p)