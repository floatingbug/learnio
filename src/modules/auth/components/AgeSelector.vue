<script setup>
import {ref, onMounted, nextTick} from "vue";
import useAuthStore from "../stores/useAuthStore.js";


const {credentials} = useAuthStore();
const items = ref([]);
const COLOR_AROUND_MID = "#666666";
const COLOR_AROUND = "#A3A3A3";
const SELECTED_COLOR = "#000000";


onMounted(async () => {
	// set age in items
	for(let i = 1; i <= 12; i++){
		items.value.push({
			age: i,
			color: "#000000",
		});
	}

	// add buffer
	items.value.unshift({});
	items.value.unshift({});
	items.value.push({});
	items.value.push({});
	
	await nextTick();
	
	const ageSelector = document.querySelector(".age-selector-container");
	if(credentials.age !== 0) ageSelector.scrollTop = 50 * (credentials.age -1);
	else ageSelector.scrollTop = 100;

	// select logic
    function updateActiveItem(){
        const scrollTop = ageSelector.scrollTop;
        const itemHeight = 50; // height in px
        const centerOffset = ageSelector.clientHeight / 2;
        const centerIndex = Math.round((scrollTop + centerOffset - itemHeight / 2) / itemHeight); 

		
		credentials.age = items.value[centerIndex].age;

		// set colors
		items.value[centerIndex -2].color = COLOR_AROUND;
		items.value[centerIndex -1].color = COLOR_AROUND_MID;
		items.value[centerIndex].color = SELECTED_COLOR;
		items.value[centerIndex +1].color = COLOR_AROUND_MID;
		items.value[centerIndex +2].color = COLOR_AROUND;
    };

    ageSelector.addEventListener("scroll", () => {
        requestAnimationFrame(updateActiveItem);
    });

    // initial update
	updateActiveItem();
});

</script>


<template>    
	<div class="age-selector">
		<div class="age-selector-container">
			<div class="rectangle-container">
				<div 
					class="rectangle"
					v-for="(item, index) in items"
				>
					<div class="rectangle-content">
						<span :style="{color: item.color}">
							{{item.age}}
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>   


<style scoped>
.age-selector {
	
}

.age-selector-container::-webkit-scrollbar {
	display: none;
}

.age-selector-container {
	width: 100px;
	height: 207px;
	position: relative;
	border-radius: 30px;
	overflow-y: scroll;
	scroll-snap-type: y mandatory;
	z-index: 1;

	.overlay {
		width: 100%;
		height: 100%;
		border: 1px solid red;
	}

	.rectangle {
		width: 100%;
		height: 50px;
		position: relative;
		scroll-snap-align: center;
		z-index: 1;
		
		.rectangle-content {
			width: 100%;
			height: 100%;
			display: flex;
			position: relative;
			justify-content: center;
			border: 1px solid white;
			align-items: center;
			font-family: Fredoka;
			font-size: 2rem;
			background-color: var(--surface-color-1);
			z-index: 10;
		}
	}
}
</style>
