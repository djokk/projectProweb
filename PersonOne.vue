<script setup lang="ts">
import Header from '@/components/Header.vue'
import { useSmsStore } from '@/store/sms'
import { computed, ref } from 'vue'
import { DataProps } from './inreface'

const props = defineProps<DataProps>()

const smsStore = useSmsStore()

const user = computed(() => smsStore.users.find(user => user.id == props.user))

const textInput = ref('')

// onMounted(() => {
// 	// document.addEventListener('keyup', event => {
// 	// 	event.preventDefault()
// 	// 	if (event.code == 'Enter') {
// 	// 		console.log(event.code)
// 	// 		// sendSms()
// 	// 	}
// 	// })
// 	const input = document.getElementById(user.value.id)
// 	input.addEventListener('keyup', event => {
// 		// event.preventDefault()

// 	})
// })

const resetState = () => {
	const info = {
		id: user.value.id,
		state:
			textInput._value.length > 0
				? smsStore.PersonState.write
				: smsStore.PersonState.online,
	}

	smsStore.resetState(info)

	// textInput._value.length > 0 ?  : ''
}

// const sendSms = () => {
// 	smsStore.addMessage({
// 		id: 2,
// 		text: textInput,
// 		userId: 2,
// 		time: new Date(),
// 	})
// }
</script>

<template>
	<div class="app">
		<Header :accountInfo="user" />
		<!-- <SendPhoto /> -->
		<main class="main">
			<ul class="main__list list">
				<li
					v-for="message in smsStore.messages"
					class="list__item"
					:class="[message.userId == user.id ? 'left' : 'right']"
				>
					<div class="list__wrapper">
						<p class="list__text">
							{{ message.text }}
						</p>
					</div>
					<span class="list__time">
						{{ message.time.getHours() + ':' + message.time.getMinutes() }}
					</span>
				</li>
			</ul>
		</main>
		<form class="footer">
			<input
				@input="resetState"
				:id="user.id"
				class="write"
				type="text"
				v-model="textInput"
				placeholder="Написать сообщение..."
			/>
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
		</form>
	</div>
</template>
