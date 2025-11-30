<template>
  <div class="crypto-card">
    
    <div class="left">
      <p class="rank-label">Rank</p>
      <p class="rank-value">{{ coin.rank }}</p>
    </div>

    <div class="middle">
      <p class="name">{{ coin.name }}</p>
      <p class="symbol">{{ coin.symbol }}</p>
    </div>

    <div class="right">
      <p class="usd-label">USD</p>
      <p class="price">{{ formattedPrice }}</p>
    </div>

  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  coin: {
    type: Object,
    required: true
  }
});

const formattedPrice = computed(() =>
  Number(props.coin.price_usd).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
);
</script>

<style scoped>
.crypto-card {
  background: #feffce;
  border-radius: 18px;
  padding: 18px;
  margin-bottom: 14px;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;

  box-shadow:
    0 2px 4px rgba(0,0,0,0.05),
    0 4px 16px rgba(222, 221, 191, 0.6);
  border: 1px solid #dedcbf;
}

.rank-label,
.usd-label {
  font-size: 12px;
  color: #505050;
}

.rank-value,
.price {
  font-size: 20px;
  font-weight: bold;
  color: #262727;
}

.name {
  font-size: 17px;
  font-weight: 700;
  color: #505050;
}

.symbol {
  font-size: 14px;
  color: #262727;
  font-weight: 600;
}

.left, .middle, .right {
  display: flex;
  flex-direction: column;
}

.right {
  align-items: flex-end;
}
</style>
