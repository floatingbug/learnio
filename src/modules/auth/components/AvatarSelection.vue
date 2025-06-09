<script setup>
import {ref, watch} from "vue";
import Dialog from "primevue/dialog";


const props = defineProps({
	dialogTrigger: Number,
	avatars: Array,
});


const isDialogViesible = ref(false);
const BACKEND_RESOURCE_PATH = ref(`${import.meta.env.VITE_BACKEND_URL}`);


watch(() => props.dialogTrigger, () => {
	isDialogViesible.value = true;
});


function selectAvatar(){
}

function cancelSelection(){
	isDialogViesible.value = false;
}

</script>


<template>    
	<div class="avatar-selection">
		<Dialog 
			v-model:visible="isDialogViesible"
			header="Avatar Selection"
			modal
			:pt="{
				root: {
					style: {
						width: '90%',
						'background-color': 'rgba(0, 0, 0, 0.6)',
						'backdrop-filter': 'blur(8px)',
					}
				},
				header: {
					style: {
						padding: '1rem',
						'background-color': 'var(--secondary-color-orange)',
					}
				},
				content: {
					style: {
						height: '100dvh',
					}
				}
			}"
		>
			<div class="avatar-selector__head">
				<h1>Choose your avatar</h1>
			</div>

			<div class="avatar-selector__main">
				<div class="avatars-container">
					<div 
						class="avatar"
						v-for="(avatar, index) in avatars"
						:key="index"
					>
						<div class="img-container">
							<img :src="`${BACKEND_RESOURCE_PATH}/avatars/${avatar.path}`" alt="">
						</div>
					</div>
				</div>
			</div>

			<div class="avatar-selector__footer">
				<div class="buttons">
					<a href="#" class="button__primary button__primary--submit" @click="selectAvatar">Select</a>
					<a href="#" class="button__primary button__primary--cancel" @click="cancelSelection">Cancel</a>
				</div>
			</div>
		</Dialog>
	</div>
</template>   


<style scoped>

.avatar-selector__head {
	width: 100%;
	height: 10%;
	margin-top: 1rem;

	h1 {
		margin: 0;
		text-align: center;
		color: var(--primary-color-blue);
	}
}

.avatar-selector__main {
	width: 100%;
	height: 60%;
	display: grid;
	margin-top: 1.5rem;
	padding: 0 1rem;
	
	.avatars-container {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 100px));
		column-gap: 1rem;
		row-gap: 1rem;
		overflow: hidden;

		.avatar {
			.img-container {
				width: 100%;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
	}
}


.avatar-selector__footer {
	width: 100%;
	height: 30%;
	display: flex;
	align-items: center;
	
	.buttons {
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 1rem;
		
		.button__primary--submit {
			background-color: var(--primary-color-green);
		}

		.button__primary--cancel {
			background-color: var(--primary-color-yellow);
		}
	}
}
</style>
