<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{ accountInfo: any[] }>()
</script>

<template>
	<header class="header">
		<div class="account-name">
			<div class="account-name__image">
				<img :src="accountInfo.image" alt="" />
			</div>
			<div class="account-name__info info">
				<h3 class="info__title">{{ accountInfo.name }}</h3>
				<p class="info__subtitle">{{ accountInfo.state }}</p>
			</div>
		</div>
	</header>
</template>
