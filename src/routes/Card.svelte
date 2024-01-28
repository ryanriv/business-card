<script>
	import Contact from './components/Contact.svelte';
	import Profile from './components/Profile.svelte';
</script>

<div class="card">
    <Contact />
    <Profile />
</div>

<style>
	.card {
        --shadow-card: 0px 10px 20px 0px rgba(0, 0, 0, 0.15);
	    --border-radius-card: 25px;
	    --color-bg-card: #f5f5f5;
        --padding-card: 25px;

        display: grid;
        grid-template-columns: 1fr 781px;
	    margin: auto;
        width: 100%;
        max-width: 1122px;
        height: 667px;
        background-color: var(--color-bg-card);
        border-radius: var(--border-radius-card);
        box-shadow: var(--shadow-card);
        overflow: hidden;
	}
</style>