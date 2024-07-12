
<template>
	<div
		class="bg-white w-full flex flex-col items-center justify-center pb-5 max-h-[calc(100vh-5rem)]"
	>
		<!-- Header -->
		<div
			class="w-full flex flex-row gap-2 pt-8 pb-5 border-b justify-center items-center sticky top-0 z-[100]"
		>
			<span class="text-gray-900 font-bold text-lg text-center">
				Change Password 
			</span>
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
</template>

<script setup>
import { IonPage, IonContent } from "@ionic/vue"
import { inject, ref } from "vue"
import { Input, Button, ErrorMessage, Dialog } from "frappe-ui"

const password = ref(null)
const errorMessage = ref("")

const session = inject("$session")
// const userPswd = inject("$userPswd")

async function submit(e) {
	try {
        console.log(" ==== e === ", password.value)
        // const response = await userPswd.userChangePswd(password.value)
        // console.log(" ==== response === ", response)


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
