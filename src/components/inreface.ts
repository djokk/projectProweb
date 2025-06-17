import type { Sms } from '../store/sms'

export interface DataProps {
	user_id: number
}
export interface MessageProps {
	message: Sms
	user_id: number
}
