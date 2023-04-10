<template>
  <button
    :class="`
    py-[8px]
    px-[15px]
    mx-1
    font-semibold
    text-base
    text-white
    cursor-pointer
    ${type + (plain ? '-plain' : '')}
    ${'hover:' + type + '-hover' + (plain ? '-plain' : '')}
    ${round ? 'rounded-[20px]' : 'rounded-[4px]'}
    ${circle ? 'rounded-[50%] text-[#606266] px-[8px]' : 'rounded-[4px]'}
    `"
  >
    <i v-if="icon" :class="`i-ic-baseline-${icon} p-3`"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts" setup name="WButton">
import "uno.css";

const props = defineProps({
  type: { type: String, default: "dfault" },
  plain: { type: Boolean, default: false },
  round: { type: Boolean, default: false },
  circle: { type: Boolean, default: false },
  icon: { type: String, default: "" },
});
</script>
