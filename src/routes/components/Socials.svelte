<script>
    import github from '$lib/icons/github-icon.svg';
    import linkedin from '$lib/icons/linkedin-icon.svg';
    import twitter from '$lib/icons/twitter-icon.svg';
</script>

<div class="socials">
    <div class="label">
        Find me on
    </div>

    <a href="https://www.github.com" target="_blank" class="social-link"><img src={github} alt="GitHub" /></a>
    <a href="https://www.linkedin.com" target="_blank" class="social-link"><img src={linkedin} alt="LinkedIn" /></a>
    <a href="https://www.twitter.com" target="_blank" class="social-link"><img src={twitter} alt="Twitter" /></a>
</div>

<style>
    .socials {
        padding: var(--padding-card);
        padding-bottom: calc(var(--padding-card) * 2.5);
        background-color: var(--color-primary);
        margin-right: 5px;
    }

    .social-link:hover {
        opacity: 60%;
    }

    .social-link img {
        width: 20px;
    }
</style>