<script>
    import photo from '$lib/images/photo.avif?enhanced';
</script>

<div class="photo-container">
    <div class="square square-top"></div>
    <div class="rectangle animate-wiggle"></div>
    <enhanced:img src={photo} class="photo" alt="Silhouette of man pointing at sky." />
    <div class="square square-bottom animate-pulsate"></div>
    <div class="circle"></div>
</div>

<style lang="scss">
    @import '../variables.scss';

    .photo-container {
        position: absolute;
        margin-top: auto;
        margin-bottom: auto;
        z-index: 1;
        top: 40px;
        left: 280px;
    }

    .photo-container .photo {
        height: 550px;
        width: 335px;
        object-fit: cover;
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
        top: 70px;
        left: -25px;
    }

    .square-bottom {
        left: 30px;
        bottom: -20px;
    }

    .rectangle {
        width: 50px;
        height: 20px;
        top: 15px;
        right: -35px;
        background-color: var(--color-accent);
    }

    .circle {
        width: 50px;
        aspect-ratio: 1;
        bottom: -15px;
        right: -20px;
        z-index: -1;
        border-radius: 100%;
        background-color: var(--color-primary);
    }

    @media (max-width: $extra-large-breakpoint) {
        .photo-container {
            width: 340px;
            left: 70px;
        }

        .photo-container .photo {
            width: 200px;
            height: 200px;
            border-radius: 100%;
        }

        .square,
        .rectangle,
        .circle {
            display: none;
        }
    }

    @media (max-width: $large-breakpoint) {
        .photo-container {
            left: 0;
            margin: 0;
            z-index: 1;
            width: 50%;
            top: var(--padding-card);
            text-align: center;
        }

        .photo-container .photo {
            width: 125px;
            height: 125px;
            border-radius: 100%;
        }
    }

    @media (max-width: $small-breakpoint) {
        .photo-container {
            width: 100%;
        }
    }
</style>