<template>
  <v-container fluid fill-height class="page-not-found">
    <v-layout justify="center" align-items="center" fill-height>
      <v-card class="mx-auto" elevation="12">
        <v-card-text>
          <v-icon x-large color="error">mdi-alert-circle</v-icon>
          <h3 class="error-message">Oops! Page Not Found</h3>
          <p class="description">
            The page you're looking for seems to be lost in the digital wilderness.
          </p>
          <v-btn color="primary" to="/">Take me home</v-btn>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script setup></script>

<style scoped>
.page-not-found {
  background-image: url('path/to/your/background.jpg'); /* Replace with your desired background image */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.error-message {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 16px;
}

.description {
  font-size: 1.2rem;
  margin-bottom: 24px;
}
</style>
