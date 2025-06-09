<script setup>
import {ref} from "vue";
import {RouterView, useRouter} from "vue-router";
import useAuthStore from "./stores/useAuthStore.js";


const {credentials, indicatorBoxes} = useAuthStore();
const router = useRouter();


function changeAuthPage(box){
	if(box.id === "name"){
		for(let i = 1; i < indicatorBoxes.value.length; i++){
			indicatorBoxes.value[i].isActive = false;
		}

		router.push("/auth/core-data");
	}
	else if(box.id === "age"){
		for(let i = 2; i < indicatorBoxes.value.length; i++){
			indicatorBoxes.value[i].isActive = false;
		}

		router.push("/auth/age-data");
	}
	else if(box.id === "avatar"){
		router.push("select-avatar");
	}
}

</script>


<template>    
	<div class="auth__sign-container">
		<div class="auth__sign-content">
			<div class="auth__indicator-boxes">
				<div 
					class="auth__indicator-box"
					v-for="(box, index) in indicatorBoxes"
					:key="index"
					:style="box.isActive ? {backgroundColor: box.background} : {}"
					@click="changeAuthPage(box)"
				>
				</div>
			</div>

			<RouterView />
		</div>
	</div>
</template>   


<style scoped>
.auth__sign-container {
	width: 100%;
	display: flex;
	justify-content: center;
}

.auth__sign-content {
	margin-top: 4rem;
}

.auth__indicator-boxes {
	display: flex;
	justify-content: center;
	gap: 1rem;
}

.auth__indicator-box {
	width: 48px;
	height: 7px;
	border-radius: 26px;
	cursor: pointer;
}
</style>
