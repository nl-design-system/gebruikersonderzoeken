<script setup>
	const props = defineProps(['greeting'])
</script>

<template>
	<p>
		{{ greeting }}!<br />
		Ik ben een Vue component
	</p>
</template>

<style scoped>
	p {
		color: red;
	}
</style>
