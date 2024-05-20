const routes = [
	{
		name: "MissingCheckinRequestFormView",
		path: "/missing-checkins",
		component: () => import("@/views/missing_checkins/Form.vue"),
	},
	{
		name: "MissingCheckinRequestDetailView",
		path: "/missing-checkins/:id",
		props: true,
		component: () => import("@/views/missing_checkins/Form.vue"),
	},
]

export default routes
