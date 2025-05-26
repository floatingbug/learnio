<script setup>
import {ref, watch} from "vue";
import {useRouter} from "vue-router";
import useUser from "@/stores/userStore.js";
import MenuButtonBars from "./components/MenuButtonBars.vue";
import MenuButtonUser from "./components/MenuButtonUser.vue";
import MenuSignInButton from "./components/MenuSignInButton.vue";
import MenuSignUpButton from "./components/MenuSignUpButton.vue";
import userItems from "./data/userItems.js";
import menuItems from "./data/menuItems.js";


const {user, signOutUser} = useUser();
const router = useRouter();
const isUserMenuOpen = ref(false);
const isItemMenuOpen = ref(false);


function handleUserItemsEvents(userItem){
	if(userItem.id === "signOut"){
		signOutUser();
		isUserMenuOpen.value = false;
		isItemMenuOpen.value = false;
		router.push("/welcome");
	}
	else if(userItem.id === "settings"){
		router.push("/user/settings");
	}

	isUserMenuOpen.value = false;
}

</script>


<template>    
	<!-- Menu for signed in user -->
	<div class="menu__menu-bar" v-if="user.isSignedIn">
		<MenuButtonBars @click="isItemMenuOpen = !isItemMenuOpen;" />
		<MenuButtonUser @click="isUserMenuOpen = !isUserMenuOpen;" />
	</div>
	
	<ul 
		class="menu__items"
		:class="!isItemMenuOpen ? 'menu__items--closed' : ''"
	>
		<li
			v-for="(menuItem, index) in menuItems"
			:key="index"
		>
			<RouterLink :to="menuItem.url" @click="isItemMenuOpen = false;">
				{{menuItem.label}}
			</RouterLink>
		</li>
	</ul>

	<ul 
		class="menu__user-items"
		:class="!isUserMenuOpen ? 'menu__user-items--closed' : ''"
	>
		<li 
			v-for="(userItem, index) in userItems"
			:key="index"
			@click="handleUserItemsEvents(userItem)"
		>
			{{userItem.label}}
		</li>
	</ul>

	<!-- Menu for signed out user -->
	<div class="menu__menu-bar" v-if="!user.isSignedIn">
		<div class="menu__logo">
			Learnoo
		</div>

		<div class="menu__sign-buttons">
			<MenuSignInButton />
			<MenuSignUpButton />
		</div>
	</div>
</template>   


<style scoped>
.menu__menu-bar {
	width: 100%;
	height: 50px;
	position: fixed;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
	z-index: 1001;
	background-color: var(--secondary-color-coral);
}

.menu__items {
	width: 50%;
	height: 50dvh;
	position: absolute;
	left: 0;
	top: 50px;
	margin: 0;
	list-style: none;
	z-index: 1000;
	transition: transform 250ms;
	background-color: var(--primary-color-green);
}

.menu__items--closed {
	transform: translateY(-100%);
}

.menu__user-items {
	width: 50%;
	height: 50dvh;
	position: absolute;
	top: 50px;
	right: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	padding: 2rem 0;
	margin: 0;
	list-style: none;
	z-index: 1000;
	transition: transform 250ms;
	background-color: var(--secondary-color-orange);
}

.menu__user-items--closed {
	transform: translateY(-100%);
}

.menu__sign-buttons {
	display: flex;
	gap: 1rem;
}
</style>
