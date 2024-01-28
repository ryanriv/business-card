<script>
    import Photo from './Photo.svelte';
    import Bio from './Bio.svelte';
</script>

<div class="profile">
    <div class="circle"></div>
    <Photo />
    <Bio />
</div>

<style>
    .profile {
        position: relative;
        padding: var(--padding-card);
        display: grid;
        grid-template-columns: 245px 1fr;
        height: 100%;
    }

    .circle {
        position: absolute;
        top: -100px;
        right: -100px;
        z-index: 1;
        aspect-ratio: 1;
        width: 200px;
        border-radius: 100%;
        background-color: var(--color-primary);
    }
</style>