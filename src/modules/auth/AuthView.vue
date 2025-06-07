<script setup>
import {ref} from "vue";
import {RouterView} from "vue-router";
import useAuthStore from "./stores/useAuthStore.js";


const {credentials, indicatorBoxes} = useAuthStore();

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
}
</style>
