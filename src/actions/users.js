import { RECEIVE_QUESTIONS } from "./questions"

export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUsers (users) {
  type: RECEIVE_USERS,
  users,
}