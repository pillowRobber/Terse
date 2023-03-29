<template>
  <button
    :class="`      
      py-2 
      px-4 
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
      bg-${color}-500 
      hover:bg-${color}-700 
      border-none 
      cursor-pointer
      mx-1`"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup name="WButton">
import "uno.css";
import { defineProps } from "vue";
// defineOptions({ name: "WButton"});

const props = defineProps({
  color: { type: String, default: "blue" },
});
</script>
<!-- <script lang="ts">
import 'uno.css'
export default {
  name: "WButton",
  props: {
    color: { type: String, default: 'blue' }
  }
}
</script> -->
