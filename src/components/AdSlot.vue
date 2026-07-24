<template>
  <div class="ad-slot" :class="slotClass">
    <ins ref="adRef" class="adsbygoogle" style="display:block" :data-ad-client="client" :data-ad-slot="slot"
      :data-ad-format="format" :data-full-width-responsive="fullWidthResponsive ? 'true' : 'false'"></ins>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  // ID do publisher (ca-pub-XXXXXXXXXXXXXXXX)
  client: {
    type: String,
    default: import.meta.env.VITE_ADSENSE_PUBLISHER_ID
  },
  // ID do bloco de anúncio (data-ad-slot)
  slot: {
    type: String,
    required: true
  },
  // Formato do anúncio: 'auto', 'fluid', 'rectangle', etc.
  format: {
    type: String,
    default: 'auto'
  },
  fullWidthResponsive: {
    type: Boolean,
    default: true
  },
  // Classe extra para posicionamento (ex: 'ad-footer', 'ad-sidebar')
  slotClass: {
    type: String,
    default: ''
  }
})

const adRef = ref(null)

onMounted(() => {
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  } catch (e) {
    console.error('AdSense error:', e)
  }
})
</script>

<style scoped>
.ad-slot {
  width: 100%;
  min-height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
  overflow: hidden;
}
</style>
