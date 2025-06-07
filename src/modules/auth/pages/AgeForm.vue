<script setup>
import {useRouter} from "vue-router";
import AgeSelector from "../components/AgeSelector.vue";
import useAuthStore from "../stores/useAuthStore.js";


const router = useRouter();
const {credentials, indicatorBoxes} = useAuthStore();


function nextPage(){
	indicatorBoxes.value.find(box => box.id === "avatar").isActive = true;
	router.push("/auth/select-avatar");
}

</script>


<template>    
	<div class="age-form">
		<h1>How old are you?</h1>

		<AgeSelector class="age-selector" />

		<a href="#"
			class="button__primary button__primary-continue"
			@click="nextPage"
		>
			Continue
		</a>
	</div>
</template>   


<style scoped>
.age-form {
	width: 100%;
	min-height: 100dvh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 3rem;
}

.age-selector {
	margin-top: 1rem;
}

.button__primary-continue {
	margin-top: 3rem;
	background-color: var(--primary-color-blue);
}
</style>
