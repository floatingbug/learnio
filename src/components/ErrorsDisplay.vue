<script setup>
const props = defineProps({
	errors: Array,
});

</script>


<template>    
	<div 
		class="errors__container"
		v-if="errors"
	>
		<div 
			class="errors__error"
			v-for="(error, index) in errors"
			:key="index"
		>
			{{error}}
		</div>
	</div>
</template>   


<style scoped>
.errors__error {
	color: red;
}
</style>
