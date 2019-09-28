<template functional>
  <button :disabled="props.disabled" @click="listeners.click">
    <slot />
  </button>
</template>


