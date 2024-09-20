<template>
  <AppModal v-model="show" title="게시글">
    <template #default>
      <div class="row g-3">
        <div class="col-3 text-muted">제목</div>
        <div class="col-9">{{ title }}</div>
        <div class="col-3 text-muted">내용</div>
        <div class="col-9">{{ content }}</div>
        <div class="col-3 text-muted">등록일</div>
        <div class="col-9">{{ $dayjs(boardDetail.createdAt).format('YYYY. MM. DD HH:mm:ss') }}</div>
      </div>
    </template>
    <template #actions>
      <button type="button" class="btn btn-secondary" @click="closeModal">닫기</button>
    </template>
  </AppModal>
</template>

<script setup>
import { computed } from 'vue';
/**
 * Vue3에서 props는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 읽기 전용 속성입니다.
 * 만약 자식 컴포넌트에서 props의 값을 변경해야 한다면
 * 1. v-model과 emit으로 양방향 데이터 바인딩
 * 2. 로컬 변수로 복사한 후 변경
 * 3. 상태 관리 (Vuex, Pinia 등) 사용
 */
const props = defineProps({
  modelValue: Boolean,
  title: String,
  content: String,
  createdAt: Date
});

const emits = defineEmits(['update:modelValue']);

// computed()는 읽기 전용 속성이지만, get()/set() 메소드를 사용하면 읽기/쓰기 속성으로 변경할 수 있다
const show = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits('update:modelValue', value);
  }
});

const closeModal = () => {
  show.value = false;
};
</script>

<style lang="scss" scoped></style>
