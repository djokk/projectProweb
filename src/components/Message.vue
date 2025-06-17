<script lang="ts" setup>
import type { MessageProps } from './inreface'

const props = defineProps<MessageProps>()
const time =
	props.message.time.getHours() + ':' + props.message.time.getMinutes()
</script>

<template>
	<li
		class="list__item"
		:class="[message.userId == props.user_id ? 'right' : 'left']"
	>
		<div class="list__wrapper">
			<p class="list__text">
				{{ message.text }}
			</p>
		</div>
		<span class="list__time">
			{{ time }}
		</span>
	</li>
</template>
