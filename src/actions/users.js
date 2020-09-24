import { RECEIVE_QUESTIONS } from "./questions"

export const RECEIVE_USERS = 'RECEIVE_USERS'

function receiveUsers (users) {
  type: RECEIVE_USERS,
  users,
}