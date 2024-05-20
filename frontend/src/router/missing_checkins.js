const routes = [
	{
		name: "EmployeeMissingCheckinsRequestFormView",
		path: "/missing-checkins/new",
		component: () => import("@/views/missing_checkins/Form.vue"),
	},
	{
		name: "EmployeeMissingCheckinsRequestDetailView",
		path: "/missing-checkins/:id",
		props: true,
		component: () => import("@/views/missing_checkins/Form.vue"),
	},
    {
		name: "EmployeeMissingCheckinsRequestListView",
		path: "/missing-checkins",
		component: () => import("@/views/missing_checkins/List.vue"),
	},
]

export default routes
