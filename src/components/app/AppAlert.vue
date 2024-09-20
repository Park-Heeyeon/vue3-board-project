<template>
  <Transition name="slide">
    <div v-if="show" class="app-alert alert alert-success" :class="typeStyle" role="alert">
      {{ msg }}
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  msg: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'error',
    validator: (value) => ['success', 'error'].includes(value)
  }
});

const typeStyle = computed(() => (props.type === 'error' ? 'alert-danger' : 'alert-success'));
</script>

<style scoped>
.app-alert {
  position: fixed;
  top: 10px;
  right: 10px;
}

/**
  .v-enter-from:
      컴포넌트가 DOM에 추가될 때 시작하는 상태를 정의합니다.
      opacity: 0으로 시작하며, 컴포넌트가 처음에 투명한 상태로 나타납니다.

  .v-enter-active:
      컴포넌트가 DOM에 추가되는 동안 애니메이션의 전환을 정의합니다.
      transition: opacity 0.5s ease;는 불투명도가 0에서 1로 0.5초 동안 부드럽게 변화하도록 애니메이션을 설정합니다.

  .v-enter-to:
      컴포넌트가 DOM에 추가된 후 최종 상태를 정의합니다.
      opacity: 1로 설정하여 컴포넌트가 완전히 불투명하게 됩니다.

  .v-leave-to:
      컴포넌트가 DOM에서 제거될 때 최종 상태를 정의합니다.
      opacity: 0으로 설정하여 컴포넌트가 점차적으로 사라지면서 투명해지게 됩니다.

  .v-leave-active:  
      컴포넌트가 DOM에서 제거되는 동안의 애니메이션 전환을 정의합니다.
      transition: opacity 0.5s ease;로 제거될 때도 불투명도가 1에서 0으로 0.5초 동안 부드럽게 변화합니다.
  
  ** name 속성이 있는 경우 v 대신 이름으로 지정한 속성명을 대입하면 된다.

*/
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5 ease;
}
.slide-enter-to,
.slide-leave-to {
  opacity: 1;
  transform: translateY(0px);
}
</style>
