<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{ active: any[] }>()
// const emit = defineEmits(['update:selected'])

function toggle(id: number) {
	emit('update:selected', props.selected === id ? null : id)
}

function isLight(): boolean {}
</script>

<template>
	<form class="form" :class="[active ? 'form' : 'active']">
		<div class="form__wrapper">
			<h1 class="title">Отправить картинку</h1>
			<div class="form__item">
				<label for="">URL</label>
				<input type="" name="" value="" placeholder="URL" />
			</div>
			<div class="form__item">
				<label for="">Комментарий</label>
				<input type="" name="" value="" placeholder="URL" />
			</div>
			<div class="form__btns">
				<button class="btn" type="">Отмена</button>
				<button class="btn" type="submit">ОТПРАВИТЬ</button>
			</div>
		</div>
	</form>
</template>
