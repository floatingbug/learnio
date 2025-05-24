<script setup>
import useUser from "@/stores/userStore.js";


const {user} = useUser();
console.log(user);

</script>


<template>    
	<div class="layout">
		<div class="dashboard">
			<h1>{{user.name}}, age:{{user.age}} </h1>

			<div class="dashboard__user-info">
				<div class="dashboard__xp-progress">
					Experience: {{user.xp}}
				</div>
				
				<div class="dashboard__modules">
					You have no modules started yet.
				</div>
				
				<div class="dashboard__chest">
					<div v-if="user.chest.length === 0">
						Your chest is empty right now.
					</div>
				</div>
			</div>
		</div>
	</div>
</template>   


<style scoped>
.dashboard {
	min-height: 100dvh;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.dashboard__user-info {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	font-family: Roboto;
	margin-top: 4rem;
}
</style>
