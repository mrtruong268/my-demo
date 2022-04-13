<template>
    <div>
        <div class="footer">
            <h1>VIET NAM AUTO SOLUTIONS GROUP - ERP</h1>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-image: linear-gradient(90deg, #0986c5 0%, #48c0bc 100%);
    color: white;
    text-align: center;
    z-index: 1;
}
h1 {
    padding: 12px 0;
    font-size: 20px;
}
@media only screen and (max-width: 739px) {
    .footer {
        display: none;
    }
}
</style>
