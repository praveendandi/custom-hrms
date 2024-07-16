<template>
  <div>
    <div v-if="showConfirmation">
      <p class="py-4 px-2">Are you sure you want to change the password?</p>

	  <ion-buttons slot="end">
				<Button class="w-full rounded py-5 px-2 text-white" style="background-color: black;margin-right:5px" @click="confirmChangePassword">Yes</Button>
				<Button  class="w-full rounded py-5 px-2 text-base" style="background-color: rgb(225 218 218); margin-left:5px" @click="cancelChange">No</Button>
		</ion-buttons>

		
    </div>
  </div>
</template>

<script>
import {
	IonButtons,
	IonButton
} from "@ionic/vue"
import {userResource} from "../data/user"
export default {
  data() {
    return {
      password: '',
      showConfirmation: false
    };
  },
  mounted() {
    // Automatically show the confirmation dialog on component mount
    this.showConfirmationDialog();
  },
  methods: {
    showConfirmationDialog() {
      this.showConfirmation = true;
    },
    confirmChangePassword() {
      // Call your API here
      fetch("/api/method/frappe.core.doctype.user.user.reset_password", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: userResource.data.name })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Handle success (e.g., show a success message)
        this.showConfirmation = false;
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error (e.g., show an error message)
      });
    },
    cancelChange() {
      this.showConfirmation = false;
    }
  }
};
</script>
