<script setup lang="ts">
import PersonOne from '@/components/PersonOne.vue'
import { useSmsStore } from '@/store/sms'

let usersArray = useSmsStore()
</script>

<template>
	<div v-for="user in usersArray.users">
		<PersonOne :user_id="user.id" />
	</div>
</template>
