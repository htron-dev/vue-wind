<template>
    <div v-bind="$attrs" v-on="$listeners" :class="defaultClass">
        <div v-if="haveDrawerSlot" :class="[drawerDefaultClass, drawerClass]" >
            <slot name="drawer"></slot>
        </div>

        <div :class="[mainDefaultClass, mainClass]">
            <slot name="top-bar"></slot>
            <div :class="[contentDefaultClass, contentClass]">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'WApp',
    props: {
        defaultClass: {
            type: [Array, Object, String],
            required: false,
            default: 'flex min-h-screen font-body'
        },
        drawerClass: {
            type: [Array, Object, String],
            required: false,
            default: ''
        },
        mainClass: {
            type: [Array, Object, String],
            required: false,
            default: () => []
        },
        contentClass: {
            type: [Array, Object, String],
            required: false,
            default: () => []
        },
        drawerDefaultClass: {
            type: [Array, Object, String],
            required: false,
            default: 'w-1/6 flex-1'
        },
        mainDefaultClass: {
            type: [Array, Object, String],
            required: false,
            default: () => [
                'flex',
                'flex-col',
                'w-5/6'
            ]
        },
        contentDefaultClass: {
            type: [Array, Object, String],
            required: false,
            default: () => [
                'p-5',
                'flex-1'
            ]
        }
    },
    computed: {
        haveDrawerSlot () {
            return !!this.$slots.drawer;
        }
    }
});

</script>
