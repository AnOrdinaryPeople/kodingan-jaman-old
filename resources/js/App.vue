<template>
    <div>
        <c-header/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-2 bg-white shadow position-sticky overflow-auto" style="height: 100vh;top: 0">
                    <c-side-bar/>
                </div>
                <div class="col-10">
                    <div class="tab-content p-4">
                        <transition name="slide-fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
        <c-footer/>
    </div>
</template>

<script>
	import CHeader from './components/CHeader.vue'
	import CSideBar from './components/CSideBar.vue'
	import CFooter from './components/CFooter.vue'

    export default {
        name: 'App',
        components: {
        	CHeader, CSideBar, CFooter
        }
    }
</script>
