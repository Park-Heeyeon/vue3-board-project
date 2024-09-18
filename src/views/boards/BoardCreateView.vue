<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <form @submit.prevent="save">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input id="title" v-model="form.title" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <textarea id="content" v-model="form.content" class="form-control" rows="3"></textarea>
      </div>
      <div class="pt-4">
        <button type="button" class="btn btn-outline-dark me-2" @click="goListPage">목록</button>
        <button type="submit" class="btn btn-primary">저장</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createBoard } from '@/api/boards';

const router = useRouter();

const board = ref({
  title: null,
  content: null
});

const save = () => {
  try {
    const data = {
      ...board.value,
      createdAt: new Date().toLocaleDateString()
    };
    createBoard(data);
    goListPage();
  } catch (error) {
    console.error(error);
  }
};

const goListPage = () => {
  router.push({
    name: 'BoardList'
  });
};
</script>

<style lang="scss" scoped></style>
