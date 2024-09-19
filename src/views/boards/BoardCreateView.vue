<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <!--
      sumbit 이벤트는 자식 컴포넌트의 최상위 루트 요소에 대입이 된다.
    -->
    <BoardForm v-model:title="board.title" v-model:content="board.content" @submit.prevent="save">
      <template #actions>
        <button type="button" class="btn btn-outline-dark me-2" @click="goListPage">목록</button>
        <button type="submit" class="btn btn-primary">저장</button>
      </template>
    </BoardForm>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createBoard } from '@/api/boards';
import BoardForm from '../../components/boards/BoardForm.vue';

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
