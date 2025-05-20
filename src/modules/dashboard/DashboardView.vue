<script setup>
import useUser from "@/stores/userStore.js";


const {user} = useUser();

</script>


<template>    
	<div class="layout">
		<h1>Welcome {{user.name}}</h1>
	</div>
</template>   


<style scoped>
</style>
