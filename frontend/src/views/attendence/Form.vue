<template>

	<ion-page>
		<ion-content :fullscreen="true">
			<FormView v-if="formFields.data" doctype="Attendance Request" v-model="attendenceApplication"
				:isSubmittable="true" :fields="formFields.data" :showAttachmentView="false"
				@validateForm="validateForm" />
		</ion-content>
	</ion-page>
</template>
<script setup>
import { IonPage, IonContent } from "@ionic/vue"
import { createResource } from "frappe-ui"
import { inject, ref } from "vue"

import FormView from "@/components/FormView.vue"

const attendenceApplication = ref({})
const props = defineProps({
	id: {
		type: String,
		required: false,
	},
})
const employee = inject("$employee")

// get form fields
const formFields = createResource({
	url: "hrms.api.get_doctype_fields",
	params: { doctype: "Attendance Request" },
	transform(data) {
		let fields = getFilteredFields(data)
		return fields
	}
})
formFields.reload()




// helper functions
function getFilteredFields(fields) {
	// reduce noise from the form view by excluding unnecessary fields
	// ex: employee and other details can be fetched from the session user
	const excludeFields = [
		
	]
	const employeeFields = [
		"employee",
		"company"		
	]
	if (!props.id) excludeFields.push(...employeeFields)
	return fields.filter((field) => !excludeFields.includes(field.fieldname))

}

function validateForm() {
	attendenceApplication.value.employee = employee.data.name
}

</script>