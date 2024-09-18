<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <form @submit.prevent="editBoardDetail">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input v-model="form.title" id="title" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <textarea v-model="form.content" id="content" class="form-control" rows="3"></textarea>
      </div>
      <div class="pt-4">
        <button type="button" class="btn btn-outline-danger me-2" @click="goDetailPage">
          취소
        </button>
        <button type="submit" class="btn btn-primary" @click="editBoard">수정</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getBoardById, updateBoard } from '@/api/boards';

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const form = ref({
  title: null,
  content: null
});

const fetchBoard = async () => {
  try {
    const { data } = await getBoardById(id);
    form.value = { ...data };
  } catch (error) {
    console.error(error);
  }
};

const editBoardDetail = () => {
  try {
    updateBoard(id, { ...form.value, createdAt: new Date().toLocaleDateString() });
    router.push({ name: 'BoardList' });
  } catch (error) {
    console.error(error);
  }
};

const goDetailPage = () => {
  router.push({
    name: 'BoardDetail',
    params: { id }
  });
};

fetchBoard();
</script>

<style lang="scss" scoped></style>
