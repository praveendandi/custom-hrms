const routes = [
	{
		name: "EmployeeAttendenceFormView",
		path: "/employee-attendence",
		component: () => import("@/views/attendence/Form.vue"),
	}
]

export default routes
