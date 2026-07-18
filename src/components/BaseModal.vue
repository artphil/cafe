<script setup>
import { ref } from 'vue'

defineProps({
  title: { type: String, required: true }
})

const dialogRef = ref(null)

function open() {
  dialogRef.value?.showModal()
}
function close() {
  dialogRef.value?.close()
}

// Permite que a página pai chame modalRef.value.open() / .close()
defineExpose({ open, close })
</script>

<template>
  <dialog class="modal" ref="dialogRef">
    <div class="modal-inner">
      <button class="modal-close" type="button" aria-label="Fechar" @click="close">×</button>
      <h3>{{ title }}</h3>
      <slot />
    </div>
  </dialog>
</template>
