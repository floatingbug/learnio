<script setup>
import {ref, reactive, toRaw} from "vue";
import {useRouter} from "vue-router";
import signInAPI from "../api/signInAPI.js";
import useUser from "@/stores/userStore.js";
import ErrorsDisplay from "@/components/ErrorsDisplay.vue";


const {user, setUser} = useUser();
const router = useRouter();
const credentials = reactive({
	nameOrEmail: "",
	password: "",
});
const errors = ref([]);


async function signIn(){
	const rawCredentials = toRaw(credentials);

	const result = await signInAPI({credentials: rawCredentials});
	
	if(!result.success){
		return errors.value = ["Wrong credentials"];
	}
	
	localStorage.setItem("isSignedIn", true);
	localStorage.setItem("token", result.data.token);

	user.isSignedIn = true;

	setUser(result.data);

	router.push("/dashboard");
}

</script>


<template>    
	<div class="sign-in">
		<h1>sign in</h1>

		<div class="sign-in__inputs">
			<div class="sign-in__input sign-in__input-name">
				<label for="nameOrEmail">Name of E-Mail:</label>
				<input type="text" v-model="credentials.nameOrEmail">
			</div>
			
			<div class="sign-in__input sign-in__input-password">
				<label for="password">Password:</label>
				<input type="password" v-model="credentials.password">
			</div>

			<ErrorsDisplay :errors="errors" />

			<button
				@click="signIn"
			>
				Sign in
			</button>
		</div>
	</div>
</template>   


<style scoped>
.sign-in {
	display: flex;
	flex-direction: column;
	
	h1 {
		text-align: center;
	}
}

.sign-in__inputs {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.sign-in__input {
	display: flex;

	label {
		min-width: 120px;
	}
}
</style>
