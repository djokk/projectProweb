<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { useSmsStore } from '../store/sms'
import type { DataProps } from './inreface'

const props = defineProps<DataProps>()
const smsStore = useSmsStore()
const user = computed(() =>
	smsStore.users.find(user => user.id != props.user_id)
)
</script>

<template>
	<header class="header" v-if="user">
		<div class="account-name">
			<div class="account-name__image">
				<img :src="user.image" alt="" />
			</div>
			<div class="account-name__info info">
				<h3 class="info__title">{{ user.name }}</h3>
				<p class="info__subtitle">{{ user.state }}</p>
			</div>
		</div>
	</header>
</template>
