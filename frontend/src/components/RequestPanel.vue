<template>
	<div class="w-full">
		<TabButtons
			:buttons="[{ label: 'My Requests' }, { label: 'Team Requests' }]"
			v-model="activeTab"
		/>
		<RequestList v-if="activeTab == 'My Requests'" :items="myRequests" />
		<RequestList
			v-else-if="activeTab == 'Team Requests'"
			:items="teamRequests"
			:teamRequests="true"
		/>
	</div>
</template>

<script setup>
import { ref, inject, onMounted, computed, markRaw } from "vue"

import TabButtons from "@/components/TabButtons.vue"
import RequestList from "@/components/RequestList.vue"

import { myLeaves, teamLeaves } from "@/data/leaves"
import { myClaims, teamClaims } from "@/data/claims"
import { myAttendance } from "@/data/attendance"
// import { myMissingCheckins } from "@data/missing-checkins"

import LeaveRequestItem from "@/components/LeaveRequestItem.vue"
import ExpenseClaimItem from "@/components/ExpenseClaimItem.vue"
import AttendanceReqItem from "@/components/AttendanceReqItem.vue"
import MissingCheckinItem from "@/components/MissingCheckinItem.vue"

import { useListUpdate } from "@/composables/realtime"

const activeTab = ref("My Requests")
const socket = inject("$socket")

const myRequests = computed(() => updateRequestDetails(myLeaves, myClaims, myAttendance))

console.log(" My Requests ==== ", myRequests)

const teamRequests = computed(() =>
	updateRequestDetails(teamLeaves, teamClaims)
)

function updateRequestDetails(leaves, claims, attendance) {
	const requests = [...(leaves.data || []), ...(claims.data || []), ...(attendance.data||[])]

	requests.forEach((request) => {
		if (request.doctype === "Leave Application") {
			request.component = markRaw(LeaveRequestItem)
		} else if (request.doctype === "Expense Claim") {
			request.component = markRaw(ExpenseClaimItem)
		} else if (request.doctype === "Attendance Request"){
			request.component = markRaw(AttendanceReqItem)
		}else if (request.doctype === "Employee Missing Checkins Request"){
			request.component = markRaw(MissingCheckinItem)
		}

	})
	return getSortedRequests(requests)
}

function getSortedRequests(list) {
	// return top 10 requests sorted by posting date
	return list
		.sort((a, b) => {
			return new Date(b.posting_date) - new Date(a.posting_date)
		})
		.splice(0, 10)
}

onMounted(() => {
	useListUpdate(socket, "Leave Application", () => teamLeaves.reload())
	useListUpdate(socket, "Expense Claim", () => teamClaims.reload())
})
</script>
