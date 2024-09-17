<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <!-- <RouterLink class="nav-link" active-class="active" to="/nested/one">Nested One</RouterLink> -->
        <RouterLink class="nav-link" active-class="active" :to="{ name: 'NestedOne' }" replace
          >Nested One</RouterLink
        >
      </li>
      <li class="nav-item">
        <!-- <RouterLink class="nav-link" active-class="active" to="/nested/two">Nested Two</RouterLink> -->
        <RouterLink class="nav-link" active-class="active" :to="{ name: 'NestedTwo' }" replace
          >Nested One</RouterLink
        >
      </li>
    </ul>
    <hr class="my-4" />
    <RouterView></RouterView>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
