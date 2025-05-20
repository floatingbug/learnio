<script setup>
import {RouterView} from "vue-router";

</script>


<template>    

	<div class="auth__sign-container">
		<RouterView />
	</div>
</template>   


<style scoped>
.auth__sign-container {
	width: 100%;
	display: flex;
	justify-content: center;
}
</style>
