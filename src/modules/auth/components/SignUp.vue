<script setup>
</script>


<template>    
	<h1>sign up</h1>
	<div class="sign-in">
		<h1>sign in</h1>

		<div class="sign-in__inputs">
			<div class="sign-in__input sign-in__input-name">
				<label for="name">Name:</label>
				<input type="text" v-model="credentials.name">
			</div>
			
			<div class="sign-in__input sign-in__input-email">
				<label for="email">E-Mail:</label>
				<input type="email" v-model="credentials.email">
			</div>
			
			<div class="sign-in__input sign-in__input-password">
				<label for="password">Password:</label>
				<input type="password" v-model="credentials.password">
			</div>

			<button
				@click="triggerSignIn"
			>
				Sign in
			</button>
		</div>
	</div>
</template>   


<style scoped>
</style>
