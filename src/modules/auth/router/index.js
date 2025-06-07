import AuthView from "../AuthView.vue";
import SignIn from "../pages/SignIn.vue";
import CoreDataForm from "../pages/CoreDataForm.vue";
import AgeForm from "../pages/AgeForm.vue";
import AvatarForm from "../pages/AvatarForm.vue";


export default [
	{
		path: "/auth",
		component: AuthView,
		children: [
			{
				path: "sign-in",
				component: SignIn,
			},
			{
				path: "core-data",
				component: CoreDataForm,
			},
			{
				path: "age-data",
				component: AgeForm,
			},
			{
				path: "select-avatar",
				component: AvatarForm,
			},
		],
	},
];
