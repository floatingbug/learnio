import UserView from "../UserView.vue";
import Settings from "../pages/Settings.vue";


export default [
	{
		path: "/user",
		component: UserView,
		children: [
			{
				path: "settings",
				component: Settings,
			},
		],
	},
];
