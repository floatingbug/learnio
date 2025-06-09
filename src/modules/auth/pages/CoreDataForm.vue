<script setup>
import {ref, watch} from "vue";
import useAuthStore from "../stores/useAuthStore.js";
import {useRouter} from "vue-router";
import checkNameAvailableAPI from "../api/checkNameAvailableAPI.js";


const {credentials, indicatorBoxes} = useAuthStore();
const router = useRouter();
const errors = ref([]);


watch(() => credentials.name, () => {
	errors.value = [];
});


async function nextPage(){
	// check if name is available
	const isNameAvailable = await checkNameAvailableAPI({name: credentials.name});
	if(credentials.name === "") return errors.value.push("Please enter your name.");
	else if(!isNameAvailable) return errors.value.push("Name is already in use.");

	indicatorBoxes.value.find(box => box.id === "age").isActive = true;
	router.push("/auth/age-data");
}


</script>


<template>    
	<div class="sign-up">
		<h1>What's your name, friend?</h1>

		<div class="errors" v-if="errors.length > 0">
			<div class="error" v-for="(error, index) in errors" :key="index">{{error}}</div>
		</div>

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

.errors {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 0;
}
</style>
