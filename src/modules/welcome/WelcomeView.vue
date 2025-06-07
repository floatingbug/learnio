<script setup>
</script>


<template>    
	<div class="layout">
		<div class="welcome">
			<h1>Hey there, friend!</h1>
			
			<p class="welcome__introduction">We're so excited to learn and play with you!</p>
			
			<div class="welcome__sign-buttons">
				<RouterLink 
					class="button__primary button__primary--login-in" 
					to="/auth/sign-in"
				>
					Log in
				</RouterLink>
			
				<RouterLink 
					class="button__primary button__primary--new-account" 
					to="/auth/core-data"
				>
					New Account
				</RouterLink>
			</div>
		</div>
	</div>
</template>   


<style scoped>
.welcome {
	width: 100%;
	min-height: 100dvh;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 4rem;

	h1 {
		margin-top: 40dvh;
	}
}

.welcome__sign-buttons {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 2rem;
}

.welcome__introduction {
	width: 60%;
	text-align: center;
}

.button__primary--login-in {
	background-color: var(--primary-color-purple);
	margin-top: 4rem;
}

.button__primary--new-account {
	padding-top: 0.3rem;
	padding-bottom: 0.3rem;
	color: var(--text-color-dark);
	background-color: var(--primary-color-blue);
}
</style>
