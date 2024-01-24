
<script>
    import Card from './Card.svelte';
    import { onMount } from 'svelte';

    onMount(() => {
        const bdsElement = document.createElement('bds');
        document.head.appendChild(bdsElement);
    });
</script>

<Card />