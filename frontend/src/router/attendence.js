const routes = [
	{
		name: "AttendanceRequestFormView",
		path: "/employee-attendence",
		component: () => import("@/views/attendence/Form.vue"),
	},
	{
		name: "EmployeeAttendenceDashboardView",
		path: "/employee-attendence-dashboard",
		component: () => import("@/views/attendence/Dashboard.vue"),
	},
	{
		name: "AttendanceRequestDetailView",
		path: "/employee-attendence/:id",
		props: true,
		component: () => import("@/views/attendence/Form.vue"),
	},
]

export default routes
