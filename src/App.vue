<script setup>
import {onMounted} from "vue";
import { RouterLink, RouterView, useRouter } from 'vue-router'
import useUser from "@/stores/userStore.js";
import TheMenu from "@/components/menu/TheMenu.vue";


const router = useRouter();
const {user} = useUser();


onMounted(async () => {
	const isSignedIn = localStorage.getItem("isSignedIn");


	if(isSignedIn){
		user.isSignedIn = true;
		user.token = localStorage.getItem("token");
		user.name = localStorage.getItem("name");
	}

	if(!user.isSignedIn) router.push("/welcome");
	else router.push("/dashboard");
});

</script>

<template>
	<TheMenu />

	<RouterView />
</template>

<style scoped>
</style>
