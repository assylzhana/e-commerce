<template>
</template>

<script>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

export default {
  name: 'ModalSearch',
  props: ['id', 'searchId', 'modalOpen'],
  emits: ['open-modal', 'close-modal'],
  setup(props, { emit }) {

    const modalContent = ref(null)
    const searchInput = ref(null)
        const clickHandler = ({ target }) => {
      if (!props.modalOpen || modalContent.value.contains(target)) return
      emit('close-modal')
    }
    const keyHandler = ({ keyCode }) => {
      if (!props.modalOpen || keyCode !== 27) return
      emit('close-modal')
    }

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    watch(() => props.modalOpen, (open) => {
      open && nextTick(() => searchInput.value.focus())
    })    

    return {
      modalContent,
      searchInput,
    }
  }
}
</script>