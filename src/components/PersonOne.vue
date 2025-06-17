<script setup lang="ts">
import Header from '@/components/Header.vue'
import { PersonState, Sms, useSmsStore } from '@/store/sms'
import { computed, ref } from 'vue'
import { DataProps } from './inreface'
import Message from './Message.vue'

const props = defineProps<DataProps>()

const smsStore = useSmsStore()
const user = computed(() =>
	smsStore.users.find(user => user.id == props.user_id)
)

const textInput = ref('')
let timeout: number | undefined = undefined
async function resetState() {
	if (timeout) {
		clearTimeout(timeout)
		timeout = undefined
	}
	let state = PersonState.write
	if (!textInput.value) state = PersonState.online

	const info = {
		id: props.user_id,
		state,
	}
	smsStore.resetState(info)
	timeout = setTimeout(() => {
		info.state = PersonState.online
		smsStore.resetState(info)
	}, 2_000)
	delay(5_000).then(() => {
		console.log('12312312312312312-----------------')
	})
}

async function delay(time: number): Promise<void> {
	return new Promise(resolve => {
		setTimeout(resolve, time)
	})
}

function sendForm() {
	if (!textInput.value) return
	const sms: Sms = {
		id: smsStore.messages.length + 1,
		text: textInput.value,
		userId: props.user_id,
		time: new Date(),
	}
	textInput.value = ''
	smsStore.addMessage(sms)
}
</script>

<template>
	<div class="app">
		<Header :user_id="user_id" />
		<!-- <SendPhoto /> -->
		<main class="main">
			<ul class="main__list list">
				<Message
					:message="message"
					:user_id="user_id"
					v-for="message in smsStore.messages"
					:key="message.id"
				></Message>
			</ul>
		</main>
		<div class="footer">
			<form @submit.prevent="sendForm">
				<input
					@input="resetState"
					:id="user.id"
					class="write"
					type="text"
					v-model="textInput"
					placeholder="Написать сообщение..."
				/>
			</form>
			<button class="button">
				<svg
					width="20"
					height="18"
					viewBox="0 0 20 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M18 2H14.83L13.59 0.65C13.22 0.24 12.68 0 12.12 0H7.88C7.32 0 6.78 0.24 6.4 0.65L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15Z"
						fill="white"
					/>
				</svg>
			</button>
		</div>
	</div>
</template>
