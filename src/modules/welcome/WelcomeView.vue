<script setup>
</script>


<template>    
	<div class="layout">
		<h1>Welcome to Learnoo</h1>

		<div class="welcome__sign-buttons">
			<RouterLink to="/auth/sign-in">Sign in</RouterLink>
			<RouterLink to="/auth/sign-up">Sign up</RouterLink>
		</div>
	</div>
</template>   


<style scoped>
.welcome__sign-buttons {
	display: flex;
	gap: 1rem;
}
</style>
