<template>
  <div>
    <h2>{{ boardDetail.title }}</h2>
    <p>{{ boardDetail.content }}</p>
    <p class="text-muted">{{ $dayjs(boardDetail.createdAt).format('YYYY. MM. DD HH:mm:ss') }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">수정</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="delBoard">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getBoardById, deleteBoard } from '@/api/boards';
import { ref } from 'vue';

const props = defineProps({
  id: String
});

// const route = useRoute();
const router = useRouter();
// const id = route.params.id;

const boardDetail = ref({});

const getBoardDetail = async () => {
  try {
    const { data } = await getBoardById(props.id);
    setBoardDetail(data);
  } catch (error) {
    console.error(error);
  }
};

const setBoardDetail = ({ title, content, createdAt }) => {
  boardDetail.value.title = title;
  boardDetail.value.content = content;
  boardDetail.value.createdAt = createdAt;
};

const delBoard = () => {
  try {
    if (!confirm('삭제하시겠습니까?')) {
      return;
    }
    deleteBoard(props.id);
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

const goEditPage = () => {
  router.push({
    name: 'BoardEdit',
    params: { id: props.id }
  });
};

getBoardDetail();
</script>

<style lang="scss" scoped></style>
