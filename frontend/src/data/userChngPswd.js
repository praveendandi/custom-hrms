import { createResource } from "frappe-ui"

export const userChangePswd = createResource({
	url: "hrms.api.user_password_update",
	data: { pwd: password },
	cache: "hrms:user",
	onSuccess() {
		console.log("Password updated successfully");
	},
	onError(error) {
		console.error("Error updating password:", error);
	}
})