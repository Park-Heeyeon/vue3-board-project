<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <BoardForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="editBoardDetail"
    >
      <template #actions>
        <button type="button" class="btn btn-outline-danger" @click="goDetailPage">취소</button>
        <button type="submit" class="btn btn-primary" @click="editBoard">수정</button>
      </template>
    </BoardForm>
  </div>
  <AppAlert :show="showAlert" :msg="alertMsg" :type="alertType"></AppAlert>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getBoardById, updateBoard } from '@/api/boards';
import BoardForm from '@/components/boards/BoardForm.vue';
import AppAlert from '../../components/app/AppAlert.vue';

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
    vAlert('수정이 완료되었습니다!', 'success');
    // router.push({ name: 'BoardList' });
  } catch (error) {
    console.error(error);
    vAlert('에러가 발생하였습니다.');
  }
};

const goDetailPage = () => {
  router.push({
    name: 'BoardDetail',
    params: { id }
  });
};

// alert 관련
const showAlert = ref(false);
const alertMsg = ref('');
const alertType = ref('error');
const vAlert = (msg, type = 'error') => {
  showAlert.value = true;
  alertMsg.value = msg;
  alertType.value = type;
  setTimeout(() => {
    showAlert.value = false;
  }, 2000);
};

fetchBoard();
</script>

<style lang="scss" scoped></style>
