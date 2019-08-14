import { post, get } from './http'

export const apiAddress = {
    one: p => get('/user/get', p),
    two: p => post('/uset/post', p)
}