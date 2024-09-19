<template>
  <form @submit.prevent="save">
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input
        id="title"
        :value="title"
        @input="$emit('update:title', $event.target.value)"
        type="text"
        class="form-control"
      />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용</label>
      <!--
        @input 이벤트는 사용자가 <input>, <textarea>, 또는 <select> 요소에 값을 입력하거나 변경할 때 발생합니다.

        $emit는 Vue.js에서 자식 컴포넌트가 부모 컴포넌트에게 이벤트를 발생할 때 실행되는 메서드입니다. 
        이를 통해 자식 컴포넌트가 부모 컴포넌트와 상호작용할 수 있습니다
        $emit('update:title', $event.target.value): @input 이벤트가 발생할 때, 자식 컴포넌트는 update:title이라는 이벤트를 발생하며, 
        이때 input 필드의 현재 값을 $event.target.value로 전달합니다.
      -->
      <textarea
        id="content"
        :value="content"
        @input="$emit('update:content', $event.target.value)"
        class="form-control"
        rows="3"
      ></textarea>
    </div>
    <div class="d-flex gap-2 mt-4">
      <slot name="actions"></slot>
    </div>
  </form>
</template>

<script setup>
defineProps({
  title: String,
  content: String
});

/**
 * defineEmits: 이 컴포넌트가 발생시킬 수 있는 이벤트를 정의합니다.
 * 여기서는 update:title과 update:content라는 두 개의 이벤트를 정의하고 있습니다.
 */
defineEmits(['update: title', 'update: content']);
</script>

<style lang="scss" scoped></style>
