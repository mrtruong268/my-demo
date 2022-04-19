<template>
    <div>
        <navbar />
        <nuxt />
        <footerContent />
    </div>
</template>

<script>
import navbar from './navbar.vue'
import footerContent from './footerContent.vue'
export default {
    components: { navbar, footerContent },
}
</script>

<style scoped></style>
