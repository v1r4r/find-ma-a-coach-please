<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :class="mode" :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '',
    },
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #5353bc;
  border: 1px solid #5353bc;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #3636bf;
  border-color: #3636bf;
}

.flat {
  background-color: transparent;
  color: #5353bc;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #4646bf;
  color: #4646bf;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #d2d2f9;
}
</style>
