<script>
    import photo from '$lib/images/photo.avif?enhanced';
</script>

<div class="photo">
    <div class="square square-top"></div>
    <div class="rectangle animate-wiggle"></div>
    <enhanced:img src={photo} class="photo" alt="Zac Patrick" />
    <div class="square square-bottom animate-pulsate"></div>
    <div class="circle"></div>
</div>

<style>
    .photo {
        position: relative;
        margin-top: auto;
        margin-bottom: auto;
        height: 550px;
        width: 335px;
        object-fit: cover;
        transform: translateX(-45px);
        z-index: 1;
    }

    .square,
    .rectangle,
    .circle {
        position: absolute;
        display: inline-block;
        z-index: 2;
    }

    .square {
        width: 50px;
        aspect-ratio: 1;
        background-color: var(--color-accent);
    }

    .square-top {
        top: 50px;
        left: -68px;
    }

    .square-bottom {
        left: -10px;
        bottom: -25px;
    }

    .rectangle {
        width: 50px;
        height: 20px;
        top: 20px;
        right: 10px;
        background-color: var(--color-accent);
    }

    .circle {
        width: 50px;
        aspect-ratio: 1;
        bottom: -25px;
        right: 20px;
        z-index: 0;
        border-radius: 100%;
        background-color: var(--color-primary);
    }
</style>