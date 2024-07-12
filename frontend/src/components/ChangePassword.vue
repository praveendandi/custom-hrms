<template>
	<ion-page>
		<ion-content class="ion-padding">
			<div class="flex h-screen w-screen flex-col justify-center bg-white">
				<div class="flex flex-col mx-auto gap-3 items-center">
					<div class="text-3xl font-semibold text-gray-900 text-center">
						Change Password 
					</div>
				</div>

				<div class="mx-auto mt-10 w-full px-8 sm:w-96">
					<form class="flex flex-col space-y-4" @submit.prevent="submit">
						
						<Input
							label="New Password"
							type="password"
							placeholder="••••••"
							v-model="password"
						/>
						<ErrorMessage :message="errorMessage" />
						<Button
							:loading="session.login.loading"
							variant="solid"
							class="disabled:bg-gray-700 disabled:text-white !mt-6"
						>
							Save
						</Button>
					</form>
				</div>
			</div>

			
		</ion-content>
	</ion-page>
</template>

<script setup>
import { IonPage, IonContent } from "@ionic/vue"
import { inject, ref } from "vue"
import { Input, Button, ErrorMessage, Dialog } from "frappe-ui"

const password = ref(null)
const errorMessage = ref("")

const session = inject("$session")

async function submit(e) {
	try {
		// const response = await session.login(email.value, password.value)
		// if (response.message === "Password Reset") {
		// 	resetPassword.value = true
		// 	resetPasswordLink.value = response.redirect_to
		// } else {
		// 	resetPassword.value = false
		// 	resetPasswordLink.value = ""
		// }
	} catch (error) {
		errorMessage.value = error.messages.join("\n")
	}
}
</script>
