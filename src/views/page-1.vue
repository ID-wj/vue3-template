<template>
  <div>page{{ name }}</div>
</template>

<script lang="ts" setup>
import { useStore } from '../store';

const store = useStore();
const name = store.getName;
</script>
