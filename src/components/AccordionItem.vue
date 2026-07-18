<script setup>
defineProps({
  title: { type: String, required: true },
  openByDefault: { type: Boolean, default: false }
})
</script>

<template>
  <details class="accordion-item" :open="openByDefault">
    <summary>{{ title }}</summary>
    <div class="accordion-body">
      <!-- Conteúdo de cada item entra aqui via slot -->
      <slot />
    </div>
  </details>
</template>
