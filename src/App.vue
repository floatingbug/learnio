<script setup>
import {onMounted} from "vue";
import { RouterLink, RouterView, useRouter } from 'vue-router'
import useUser from "@/stores/userStore.js";
import TheMenu from "@/components/menu/TheMenu.vue";
import useFetch from "@/api/useFetch.js";


const router = useRouter();
const {user, setUser} = useUser();


onMounted(async () => {
	const isSignedIn = localStorage.getItem("isSignedIn");


	if(isSignedIn){
		user.isSignedIn = true;
		user.token = localStorage.getItem("token");
		
		const path = "/user";
		const options = {
			method: "GET",
			headers: {},
		};
		const result = await useFetch({path, options, addToken: true});
		setUser(result.data);
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
