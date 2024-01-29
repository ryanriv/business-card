<script>
	import Contact from './components/Contact.svelte';
	import Photo from './components/Photo.svelte';
	import Profile from './components/Profile.svelte';
</script>

<div class="card animate-slide-in">
    <Contact />
    <Photo />
    <Profile />
</div>

<style lang="scss">
    @import './variables.scss';

	.card {
        --shadow-card: 0px 10px 20px 0px rgba(0, 0, 0, 0.15);
	    --border-radius-card: 25px;
        --padding-card: 25px;

        display: grid;
        grid-template-columns: minmax(min-content, 340px) 1fr;
        margin: var(--padding-card);
        max-width: 1122px;
        height: 667px;
        background-color: var(--color-bg-card);
        border-radius: var(--border-radius-card);
        box-shadow: var(--shadow-card);
        overflow: hidden;
	}

    @media (max-width: $extra-large-breakpoint) {
        .card {
            --padding-card: 15px;
        }
    }

    @media (max-width: $large-breakpoint) {
        .card {
            margin: 0;
            grid-template-columns: 1fr;
            width: 100%;
            min-width: 0;
            height: min-content;
            border-radius: 0;
            box-shadow: none;
            overflow: auto;
        }
    }
</style>