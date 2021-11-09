<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ dark: theme === 'dark', sale: theme === 'sale'}">
            <slot>Don't forget to fill this</slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['theme'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style>
    .modal {
        width: 400px;
        padding: 28px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }

    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;

    }

    .modal .actions {
        text-align: center;
        margin: 30px 0 10px 0;
        color: #333;
    }

    .modal .actions a {
        color: #333;
        padding: 8px;
        border: 1px solid #eee;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px;
    }
        
    .modal.sale .actions, .modal.sale .actions a, .modal.dark .actions, .modal.dark .actions a {
        color: white;
        text-decoration: none;
    }

    .modal.sale {
        background: crimson;
        color: white;
    }

    .modal.dark {
        background: #191919;
        color: white;
    }
</style>