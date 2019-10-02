<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand text-light" :to="'home'">
            <img :src="img" width="30" height="30">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-for="(item,index) in items" :key="index">
                    <router-link class="nav-link" :to="{name: item.route}">{{ item.title }}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'c-header',
        data: () => ({
            items: [
                {title: 'HTML', route: 'html'},
                {title: 'PHP Native', route: 'php'},
                {title: 'Projects', route: 'projects'}
            ],
            img: window.location.protocol+'//'+window.location.hostname+':'+window.location.port+'/img/logo.ico'
        })
    }
</script>
