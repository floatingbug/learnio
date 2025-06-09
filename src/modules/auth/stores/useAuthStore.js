import {reactive, ref} from "vue";


const credentials = reactive({
	name: "",
	age: 0,
	avatarId: 0,
});

const indicatorBoxes = ref([
	{
		id: "name",
		background: "var(--primary-color-purple)",
		isActive: true,
	},
	{
		id: "age",
		background: "var(--primary-color-blue)",
		isActive: false,
	},
	{
		id: "avatar",
		background: "var(--primary-color-green)",
		isActive: false,
	},
]);


export default function useAuthStore(){
	return {credentials, indicatorBoxes};
}
