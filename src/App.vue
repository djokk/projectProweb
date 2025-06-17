<script setup lang="ts">
import { ref } from 'vue'
import { useSmsStore } from '@/store/sms'
import PersonOne from '@/components/PersonOne.vue'

let usersArray = useSmsStore()
</script>

<template>
	<div v-for="user in usersArray.users">
		<PersonOne :user="user.id" />
	</div>
</template>
