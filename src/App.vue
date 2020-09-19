<template>
    <div id="app">
        <img alt="Vue logo" src="assets/logo.png">
        <br>
        <router-link to="/contacts">to page1</router-link>
        <br>
        <router-link to="/contacts/info">to page2</router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {
    }
}
</script>
