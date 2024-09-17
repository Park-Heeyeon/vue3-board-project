<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="board in boards" :key="board.id" class="col-4">
        <BoardItem
          :title="board.title"
          :content="board.content"
          :created-at="board.createdAt"
          @click="goBoardDetailPage(board.id)"
        ></BoardItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getBoards } from '@/api/boards';
import BoardItem from '@/components/boards/BoardItem.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const boards = ref([]);

const fetchBoards = () => {
  boards.value = getBoards();
};

const goBoardDetailPage = (id) => {
  // router.push(`/boards/${id}`);
  router.push({
    name: 'BoardDetail',
    params: {
      id
    }
    // query: {
    //   searchText: 'hello'
    // },
    // hash: '#world'
  });
};

fetchBoards();
</script>

<style lang="scss" scoped></style>
