import { defineStore } from 'pinia'
import { reactive } from 'vue'

interface User {
	id: number
	name: string
	image: string
	state: PersonState
}

export interface Sms {
	id: number
	text: string
	userId: number
	image?: string
	time: Date
}

// interface Chat {
// 	userId: number
// 	companion: number
// }

export enum PersonState {
	online = 'online',
	offline = 'offline',
	write = 'write',
}

export const useSmsStore = defineStore('messages', () => {
	const users = reactive<User[]>([
		{
			id: 1,
			name: 'Александр',
			image: '/src/assets/img/1.png',
			state: PersonState.online,
		},
		{
			id: 2,
			name: 'Евгений',
			image: '/src/assets/img/2.png',
			state: PersonState.online,
		},
	])

	const messages = reactive<Sms[]>([
		{
			id: 1,
			text: 'string',
			userId: 1,
			time: new Date(),
		},
	])

	function resetState(info: User) {
		const user = users.find(user => user.id == info.id)
		if (user) user.state = info.state
	}

	function addMessage(info: Sms) {
		messages.push(info)
	}

	return { messages, resetState, addMessage, users, PersonState }
})
