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
    <hr class="my-4" />
    <AppCard>
      <BoardDetailView :id="1"></BoardDetailView>
    </AppCard>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getBoards } from '@/api/boards';
import BoardItem from '@/components/boards/BoardItem.vue';
import { useRouter } from 'vue-router';
import BoardDetailView from './BoardDetailView.vue';
import AppCard from '../../components/AppCard.vue';

const router = useRouter();
const boards = ref([]);

const fetchBoards = async () => {
  try {
    // (const {data: boards.value = await getBoards();})도 가능하다.
    const { data } = await getBoards();
    boards.value = data;
    router.push({ name: 'BoardList' });
  } catch (error) {
    console.error(error);
  }
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
