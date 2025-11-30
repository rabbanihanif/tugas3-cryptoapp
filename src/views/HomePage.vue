<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="light">
        <ion-title>Crypto Tickers</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <!-- REFRESH BUTTON -->
      <div class="btn-container">
        <ion-button class="refresh-btn" @click="loadData">REFRESH</ion-button>
      </div>

      <!-- LOADING SCREEN -->
      <div v-if="isLoading" class="loading-wrapper">
        <ion-spinner name="crescent" class="spinner"></ion-spinner>
        <p class="loading-text">Tunggu sebentar</p>
      </div>

      <!-- LIST -->
      <div v-else>
        <CryptoCard 
          v-for="coin in coins" 
          :key="coin.id" 
          :coin="coin" 
        />
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { IonSpinner } from "@ionic/vue";

import CryptoCard from "../components/CryptoCard.vue";
import { getCryptoTickers } from "../services/api";

const coins = ref([]);
const isLoading = ref(true);   // <-- loading status

async function loadData() {
  isLoading.value = true;      // mulai loading

  coins.value = await getCryptoTickers();

  // jeda sedikit biar smooth (opsional)
  setTimeout(() => {
    isLoading.value = false;
  }, 400);
}

onMounted(loadData);
</script>

<style scoped>
.refresh-btn {
  --background: linear-gradient(135deg, #53ba6a, #1d9375);
  --border-radius: 12px;
  --box-shadow: 0 4px 12px rgba(83, 186, 106, 0.4);
  font-weight: bold;
  letter-spacing: 1px;
}

.btn-container {
  text-align: center;
  margin-bottom: 15px;
}

/* LOADING SCREEN */
.loading-wrapper {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.spinner {
  width: 50px;
  height: 50px;
  color: #1d9375;
}

.loading-text {
  margin-top: 12px;
  color: #505050;
  font-size: 15px;
  font-weight: 500;
}
</style>
