<template>

	<ion-page>
		<ion-content :fullscreen="true">
			<FormView v-if="formFields.data" doctype="Employee Missing Checkins Request" v-model="missingApplication"
				:isSubmittable="true" :fields="formFields.data" :showAttachmentView="false" :id="props.id"
				@validateForm="validateForm" />
		</ion-content>
	</ion-page>
</template>
<script setup>
import { IonPage, IonContent } from "@ionic/vue"
import { createResource } from "frappe-ui"
import { inject, ref, watch } from "vue"

import FormView from "@/components/FormView.vue"

const missingApplication = ref({})
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
	params: { doctype: "Employee Missing Checkins Request" },
	transform(data) {
		let fields = getFilteredFields(data)
		return fields
	}
})
formFields.reload()


watch(
	() => [missingApplication.value.from_date, missingApplication.value.to_date],
	([from_date, to_date]) => {
		// validateDates(from_date, to_date)
	}
)

function validateDates(from_date, to_date) {
	if (!(from_date && to_date)) return

	const error_message =
		from_date > to_date ? "To Date cannot be before From Date" : ""

	const from_date_field = formFields.data.find(
		(field) => field.fieldname === "from_date"
	)
	from_date_field.error_message = error_message
}

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
	missingApplication.value.employee = employee.data.name
}

</script>