<template>
    <li class="nav-item">
        <router-link class="nav-link" aria-current="page" :to="navLinkItem.url">{{ navLinkItem.name }}</router-link>
    </li>
</template>
<script>
export default {
    props: {
        navLinkItem: {
            type: String,
            required: true
        }
    }
}
</script>