<script>
    import email from '$lib/icons/email-icon.svg';
    import phone from '$lib/icons/phone-icon.svg';
    import github from '$lib/icons/github-icon.svg';
    import linkedin from '$lib/icons/linkedin-icon.svg';
    import twitter from '$lib/icons/twitter-icon.svg';
</script>

<div class="contact">
    <div class="contact-info">
        <address>
            <div class="row">
                <div class="label"><img src={email} alt="Email" class="icon" /> Email</div>
                sam.evans@gmail.com
            </div>

            <div class="row">
                <div class="label"><img src={phone} alt="Phone" class="icon" /> Phone</div>
                +1 (123) 456-7890
            </div>
        </address>
    </div>

    <div class="socials">
        <div class="label">
            Find me on
        </div>
    
        <a href="https://www.github.com" target="_blank" class="social-link"><img src={github} alt="GitHub" /></a>
        <a href="https://www.linkedin.com" target="_blank" class="social-link"><img src={linkedin} alt="LinkedIn" /></a>
        <a href="https://www.twitter.com" target="_blank" class="social-link"><img src={twitter} alt="Twitter" /></a>
    </div>
</div>

<style lang="scss">
    @import '../variables.scss';

    .contact {
        display: grid;
        row-gap: 15px;
        grid-template-rows: 1fr min-content;
        color: var(--color-white);
        background-color: var(--color-primary);
    }

    .contact-info {
        display: grid;
        align-content: end;
        padding: var(--padding-card);
    }

    .contact-info address {
        font-style: normal;
    }

    .contact-info .icon {
        width: var(--font-size-base);
    }

    .contact-info .row {
        padding-top: var(--padding-card);
    }

    .label {
        font-weight: var(--font-weight-semibold);
        padding-bottom: 10px;
    }

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

    @media (max-width: $medium-breakpoint) {
        .contact {
            row-gap: 0;
            grid-template-areas:
                "photo contact-info"
                "photo socials";
            grid-template-columns: repeat(2, 1fr);
        }

        .contact-info {
            grid-area: contact-info;
            align-content: normal;
        }

        .contact-info .row:first-child {
            padding-top: 0;
        }

        .label {
            padding: 0;
        }

        .socials {
            grid-area: socials;
            margin: 0;
            padding-top: 0;
            padding-bottom: var(--padding-card);
        }
    }

    @media (max-width: $small-breakpoint) {
        .contact {
            grid-template-areas:
                "photo"
                "contact-info"
                "socials";
            grid-template-rows: calc(125px + var(--padding-card)) min-content min-content;
            grid-template-columns: 1fr;
            text-align: center;
        }
    }

</style>