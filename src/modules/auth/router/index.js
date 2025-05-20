import AuthView from "../AuthView.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";


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
				path: "sign-up",
				component: SignUp,
			},
		],
	},
];
