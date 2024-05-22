const routes = [
	{
		name: "CompensatoryLeaveRequestFormView",
		path: "/employee-compensatory",
		component: () => import("@/views/compensatory/Form.vue"),
	},
	{
		name: "CompensatoryLeaveRequestDetailView",
		path: "/employee-compensatory/:id",
		props: true,
		component: () => import("@/views/compensatory/Form.vue"),
	},
]

export default routes
