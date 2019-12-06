<template>
  <div>
    <h1>Hello {{ name }}!</h1>
    <label>
      Name:
      <input v-model="name" type="text" />
  </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Root extends Vue {
  name = "world";
}
</script>
