<script setup>
import {ref, onMounted} from "vue";
import useAuthStore from "../stores/useAuthStore.js";
import getAvatarsAPI from "../api/getAvatarsAPI.js";
import AvatarSelection from "../components/AvatarSelection.vue";


const {credentials, indicatorBoxes} = useAuthStore();
const avatars = ref([]);
const currAvatar = ref(null);
const BACKEND_RESOURCE_PATH = ref(`${import.meta.env.VITE_BACKEND_URL}`);
const avatarSelectionTrigger = ref(1);


onMounted(async () => {
	const fetchedAvatars = await getAvatarsAPI();
	avatars.value = fetchedAvatars.data;

   	currAvatar.value = avatars.value.filter(avatar => avatar.id === 0)[0];
});

</script>


<template>    
	<div class="avatar-form">
		<h1>Choose your avatar!</h1>

		<div 
			class="avatar-container"
			v-if="currAvatar"
		>
			<div 
				class="curr-avatar"
				@click="avatarSelectionTrigger *= -1;"
			>
				<img :src="`${BACKEND_RESOURCE_PATH}/resource/avatars/${currAvatar.path}`" alt="">
			</div>
		</div>

		<AvatarSelection :dialogTrigger="avatarSelectionTrigger" :avatars="avatars" />

		<a href="#" class="button__primary button__primary-done">Done</a>
	</div>
</template>   


<style scoped>
.avatar-form {
	width: 100%;
	height: 100dvh;
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		margin-top: 100px;
	}
}

.avatar-container {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.curr-avatar {
	width: 50%;
	border: 1px solid var(--primary-color-blue);
	border-radius: 30px;
	cursor: pointer;
	transition: transform 250ms;

	img {
		width: 100%;
		height: 100%;
	}
}

.curr-avatar:hover {
	transform: scale(1.1, 1.1);
}

.button__primary-done {
}
</style>
