<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <BoardFilter v-model:title="params.title_like" v-model:limit="params._limit" />
    <hr class="my-4" />
    <div class="row g-3">
      <AppGrid :items="boards">
        <template v-slot="{ item }">
          <BoardItem
            :title="item.title"
            :content="item.content"
            :created-at="item.createdAt"
            @click="goBoardDetailPage(item.id)"
          />
        </template>
      </AppGrid>
    </div>
    <AppPagination
      :current-page="params._page"
      :page-count="pageCount"
      @page="(page) => (params._page = page)"
    />
    <hr class="my-5" />
    <AppCard>
      <BoardDetailView id="1"></BoardDetailView>
    </AppCard>
  </div>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue';
import { getBoards } from '@/api/boards';
import BoardItem from '@/components/boards/BoardItem.vue';
import { useRouter } from 'vue-router';
import BoardDetailView from './BoardDetailView.vue';
import AppCard from '@/components/AppCard.vue';
import AppPagination from '@/components/AppPagination.vue';
import AppGrid from '@/components/AppGrid.vue';
import BoardFilter from './BoardFilter.vue';

const router = useRouter();
const boards = ref([]);
// json-server 명령어
const params = ref({
  _sort: 'createdAt', // 정렬하려는 기준 데이터
  _order: 'desc', // 데이터의 정렬순 (desc: 내림차순)
  _page: 1, // 조회하려는 페이지
  _limit: 3, // 가져올 데이터의 개수
  title_like: null // "_like" 명령어 앞에 컬럼이 필터 컬럼이고 그 값은 해당하는 값 (즉, title에 9가 포함된 데이터를 필터링)
});

// pagination
const totalCount = ref(0);
const pageCount = computed(() => Math.ceil(totalCount.value / params.value._limit));

const fetchBoards = async () => {
  try {
    // (const {data: boards.value = await getBoards();})도 가능하다.
    const { data, headers } = await getBoards(params.value);
    boards.value = data;
    totalCount.value = headers['x-total-count'];
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

// fetchBoards();

/**
 * watchEffect는 매개변수로 받은 메소드 내에 반응형 데이터의 변화가 감지되면
 * 그 해당 메소드를 다시 실행시킨다.
 * 페이지를 클릭했을 경우, params._page가 변화가 감지되므로 해당 메소드는 실행이 된다.
 * watchEffect는 watch와 다르게 매개변수로 받은 메소드를 초기에 한 번 실행을 시킨다.
 */
watchEffect(fetchBoards);
</script>

<style lang="scss" scoped></style>
