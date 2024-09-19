<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
  </div>
  <hr class="my-4" />
  <!--
    v-slot을 사용하면 자식 컴포넌트에서 부모 컴포넌트로 데이터를 전달할 수 있습니다. 
    부모 컴포넌트는 자식 컴포넌트에서 전달된 데이터를 사용하여 동적으로 내용을 렌더링할 수 있습니다.
  -->
  <AppGrid v-slot="{ item }" :items="items" col-class="col-6">
    <AppCard>{{ item }}</AppCard>
  </AppGrid>
</template>

<script setup>
import { useRouter } from 'vue-router';
import AppGrid from '@/components/AppGrid.vue';
import AppCard from '@/components/AppCard.vue';
import { ref } from 'vue';
const router = useRouter();

const items = ref(['사과', '딸기', '포도', '바나나']);

const goAboutPage = () => {
  router.push('/about');
};
</script>

<style lang="scss" scoped></style>
