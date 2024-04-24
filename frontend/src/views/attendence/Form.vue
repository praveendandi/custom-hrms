<template>
    
    <ion-page>
        <ion-content :fullscreen="true">
            <FormView
				v-if="formFields.data"
				doctype="Attendance Request"
				v-model="attendenceApplication"
				:isSubmittable="true"
				:fields="formFields.data"
				:showAttachmentView="false"
				@validateForm="validateForm"
			/>
        </ion-content>
    </ion-page>
</template>
<script setup>

console.log("test")

// :id="props.id"


import { IonPage, IonContent } from "@ionic/vue"
import { createResource } from "frappe-ui"
import { ref } from "vue"

import FormView from "@/components/FormView.vue"

const attendenceApplication = ref({})
const props = defineProps({
	id: {
		type: String,
		required: false,
	},
})

// get form fields
const formFields = createResource({
	url: "hrms.api.get_doctype_fields",
	params: { doctype: "Attendance Request" },
	transform(data) {
        // console.log( " data ==== ", data)
		let fields = getFilteredFields(data)

        // console.log(" ==== fields ", fields)

		// return fields.map((field) => {
		// 	if (field.fieldname === "half_day_date") field.hidden = true

		// 	if (field.fieldname === "posting_date") field.default = today

		// 	return field
		// })
	},
	onSuccess(_data) {
		// leaveApprovalDetails.reload()
		// leaveTypes.reload()
	},
})

// console.log("  ====== form ",formFields)
formFields.reload()



function validateForm() {
	
	// leaveApplication.value.employee = employee.data.name
}


// helper functions
function getFilteredFields(fields) {
	// reduce noise from the form view by excluding unnecessary fields
	// ex: employee and other details can be fetched from the session user
	const excludeFields = [
		"company",
	]

	const employeeFields = [
		"employee",
        "from_date",
        "to_date",
        "half_day",
        "include_holidays",
		"shift",
		"reason",
		"explanation",
	]

	if (!props.id) excludeFields.push(...employeeFields)

	return fields.filter((field) => !excludeFields.includes(field.fieldname))
}

</script>