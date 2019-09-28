<template>
  <!-- Try adding disabled -->
  <FunctionalButton @click="log">
    Click me
  </FunctionalButton>
</template>

<script>
import FunctionalButton from "./FunctionalButtonJSX";

// Will not work in sandbox
// import { FunctionalButton } from "./FunctionalButtonFunction";

export default {
  components: {
    FunctionalButton
  },
  methods: {
    log() {
      console.log("clicked");
    }
  }
};
</script>
