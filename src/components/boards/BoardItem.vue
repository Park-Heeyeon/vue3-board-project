<template>
  <AppCard>
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">
      {{ content }}
    </p>
    <p class="text-muted">{{ createdDate }}</p>
    <template #footer>
      <div class="d-flex flex-row-reverse">
        <!-- click 이벤트의 stop 속성은 이벤트 버블링을 막아주는 속성이다. -->
        <button class="btn p-0" @click.stop="$emit('modal')">
          <i class="bi bi-chat-heart-fill"></i>
        </button>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
import { computed, inject } from 'vue';

const props = defineProps({
  title: {
    type: String,
    Required: true
  },
  content: {
    type: String,
    Required: true
  },
  createdAt: {
    type: [String, Date, Number]
  }
});
defineEmits(['modal']);
const dayjs = inject('dayjs'); // provide()/inject()
const createdDate = computed(() => dayjs(props.createdAt).format('YYYY. MM. DD HH:mm:ss'));
</script>

<style lang="scss" scoped></style>
