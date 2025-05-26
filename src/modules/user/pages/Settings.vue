<script setup>
import {ref, reactive, toRaw} from "vue";
import saveUserMasterDataAPI from "../api/saveUserMasterDataAPI.js";
import useUserStore from "@/stores/userStore.js";
import getUserAPI from "../api/getUserAPI.js";


const {user, setUser} = useUserStore();


const isChangingName = ref(false);
const isChangingAge = ref(false);
const changes = reactive({
	name: user.name,
	age: user.age,
});


function cancelChange(inputName){
	if(inputName === "name"){
		changes.name = user.name;
		isChangingName.value = false;
	}
	
	if(inputName === "age"){
		changes.age = user.age;
		isChangingAge.value = false;
	}
}

async function saveChanges(){
	// update user and set new token
	const newToken = await saveUserMasterDataAPI({changes: toRaw(changes)});
	localStorage.setItem("token", newToken);
	user.token = newToken;

	// get new user data
	const fetchedUser = await getUserAPI();
	setUser(fetchedUser);

	isChangingName.value = false;
	isChangingAge.value = false;
}

</script>


<template>    
	<div class="settings">
		<div class="settings__master-data">
			<div class="settings__input" v-if="isChangingName">
				<label for="name">Name:</label>
				<input type="text" v-model="changes.name">
				<button @click="cancelChange('name')">Cancel</button>
			</div>

			<a 
				href="#" 
				class="settings__input-not-change button__change-setting" 
				@click="isChangingName = true;"
				v-if="!isChangingName"
			>
				<span>Name: </span>
				<div>{{user.name}}</div>
			</a>
			
			<div class="settings__input" v-if="isChangingAge">
				<label for="age">Age:</label>
				<input type="number" v-model="changes.age">
				<button @click="cancelChange('age')">Cancel</button>
			</div>

			<a 
				href="#" 
				class="settings__input-not-change button__change-setting" 
				v-if="!isChangingAge"
				@click="isChangingAge = true;"
			>
				<span>Age: </span>
				<div>{{user.age}}</div>
			</a>
		</div>

		<a 
			href="#"
			class="button__primary button__save-changes"
			@click="saveChanges"
		>
			Save Changes
		</a>
	</div>
</template>   


<style scoped>
.settings {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.settings__master-data{
	width: 90%;
	max-width: 800px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	font-family: Roboto;
	margin-top: 2rem;
}

.settings__input {
	display: flex;
	width: 50%;
	min-width: 300px;

	label {
		width: 30%;
	}

	input {
		width: 70%;
	}
}

.settings__input-not-change {
	display: flex;
	width: 50%;
	min-width: 300px;

	span {
		width: 50%;
	}

	a {
		width: 50%;
	}
}

.button__save-changes {
	margin-top: 3rem;
	background-color: var(--primary-color-purple);
}
</style>
