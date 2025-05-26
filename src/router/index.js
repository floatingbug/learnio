import { createRouter, createWebHistory } from 'vue-router'
import welcomeRoutes from "../modules/welcome/router/index.js";
import authRoutes from "../modules/auth/router/index.js";
import dashboardRoutes from "../modules/dashboard/router/index.js";
import exercisesRoutes from "../modules/exercises/router/index.js";
import userRoutes from "../modules/user/router/index.js";


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		...welcomeRoutes,
		...authRoutes,
		...dashboardRoutes,
		...exercisesRoutes,
		...userRoutes,
	],
})

export default router
