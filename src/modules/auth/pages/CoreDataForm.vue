<script setup>
import useAuthStore from "../stores/useAuthStore.js";
import {useRouter} from "vue-router";


const {credentials, indicatorBoxes} = useAuthStore();
const router = useRouter();


function nextPage(){
	indicatorBoxes.value.find(box => box.id === "age").isActive = true;
	router.push("/auth/age-data");
}

</script>


<template>    
	<div class="sign-up">
		<h1>What's your name, friend?</h1>

		<div class="sign-up__inputs">

			<input class="form-input form-input-core-data" type="text" placeholder="Enter name here" v-model="credentials.name">

			<a href="#"
				class="button__primary button__primary-continue"
				@click="nextPage"
			>
				Continue
			</a>
		</div>
	</div>
</template>   


<style scoped>
.sign-up {
	min-height: calc(100dvh - 100px);
	display: flex;
	flex-direction: column;

	h1 {
		text-align: center;
		margin-top: 30dvh;
	}
}

.sign-up__inputs {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
}

.button__primary-continue {
	margin-top: 5rem;
	background-color: var(--primary-color-purple);
}

.form-input-core-data {
	width: 90%;
}
</style>
