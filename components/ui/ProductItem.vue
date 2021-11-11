<template>
    <div class="cardItem mx-3">
        <div class="star">
            <v-icon size="18" color="yellow">mdi-star</v-icon>
            2
        </div>
        <img src="@/assets/images/product/1.png" alt="image" class="my-6" />
        <div class="px-3 mb-2">
            به اسم تنگ پرواز برای اصفهان یک کوزه بسیار زیبا
        </div>
        <div class="d-flex box">
            <div class="btn">مشاهده کالا</div>
            <v-spacer></v-spacer>
            <div class="bold">6،600،000</div>
        </div>
    </div>
</template>

<script lang='ts'>
</script>

<style scoped lang="scss">
.cardItem {
    width: 190px;
    border: 1px solid #cfcfcf;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-collapse: collapse;
    position: relative;

    .star {
        position: absolute;
        top: 3px;
        right: 3px;
    }

    &:hover {
        border: 1px solid #f2994a;
    }

    img {
        height: 120px;
    }

    .btn {
        border: 2px solid #f2994a;
        color: #f2994a;
        background: #fff;
        font-size: 0.7rem;
        padding: 2px 10px;
        margin-bottom: -1px;
        margin-right: -1px;
        cursor: pointer;
    }

    .box {
        width: 100%;

        .bold {
            font-size: 0.9rem;
            padding-left: 5px;
        }
    }
}
</style>
