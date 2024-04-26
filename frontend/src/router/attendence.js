const routes = [
	{
		name: "EmployeeAttendenceFormView",
		path: "/employee-attendence",
		component: () => import("@/views/attendence/Form.vue"),
	},
	{
		name: "EmployeeAttendenceDashboardView",
		path: "/employee-attendence-dashboard",
		component: () => import("@/views/attendence/Dashboard.vue"),
	}
]

export default routes
