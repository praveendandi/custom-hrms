<template>
	<ion-page>
		<ListView
			doctype="Compensatory Leave Request"
			pageTitle="Compensatory Leave Request"
			:tabButtons="TAB_BUTTONS"
			:fields="COMPENSATORY_FIELDS"
			:filterConfig="FILTER_CONFIG"
		/>
	</ion-page>
</template>

<script setup>
import { IonPage } from "@ionic/vue"
import ListView from "@/components/ListView.vue"

const TAB_BUTTONS = ["My Leaves", "Team Leaves"]
const COMPENSATORY_FIELDS = [
	"name",
	"employee",
	"employee_name",
	"from_date",
	"to_date",
	"reason"
]
const STATUS_FILTER_OPTIONS = ["Open", "Approved", "Rejected"]
const FILTER_CONFIG = [
	
	{
		fieldname: "employee",
		fieldtype: "Link",
		label: "Employee",
		options: "Employee",
	},
	{
		fieldname: "reason",
		fieldtype: "Text",
		label: "Reason"
	},
	{
		fieldname: "department",
		fieldtype: "Link",
		label: "Department",
		options: "Department",
	},
	{ fieldname: "from_date", fieldtype: "Date", label: "From Date" },
	{ fieldname: "to_date", fieldtype: "Date", label: "To Date" },
]
</script>
