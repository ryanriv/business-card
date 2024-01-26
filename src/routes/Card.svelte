<script>
    import email from '$lib/icons/email-icon.svg';
    import phone from '$lib/icons/phone-icon.svg';
    import github from '$lib/icons/github-icon.svg';
    import linkedin from '$lib/icons/linkedin-icon.svg';
    import twitter from '$lib/icons/twitter-icon.svg';
    import photo from '$lib/images/user-photo.jpg?enhanced';
</script>

<section class="card">
    <div class="contact">
        <div class="contact-info">
            <address>
                <div class="row">
                    <div class="label"><img src={email} alt="Email" class="icon" /> Email</div>
                    zac.patrick@gmail.com
                </div>

                <div class="row">
                    <div class="label"><img src={phone} alt="Phone" class="icon" /> Phone</div>
                    +1 (123) 456-7890
                </div>
            </address>
        </div>

        <div class="social-links">
            <div class="label">
                Find me on
            </div>

            <a href="https://www.github.com" target="_blank" class="social-link"><img src={github} alt="GitHub" /></a>
            <a href="https://www.linkedin.com" target="_blank" class="social-link"><img src={linkedin} alt="LinkedIn" /></a>
            <a href="https://www.twitter.com" target="_blank" class="social-link"><img src={twitter} alt="Twitter" /></a>
        </div>
    </div>
    <div class="bio">
        <enhanced:img src={photo} class="photo" alt="Zac Patrick" />
    </div>
</section>

<style>
	.card {
        --shadow-card: 0px 10px 20px 0px rgba(0, 0, 0, 0.15);
	    --border-radius-card: 25px;
	    --color-bg-card: #f5f5f5;
        --padding-card: 25px;

        display: grid;
        grid-template-columns: 1fr 2fr;
	    margin: auto;
        width: 100%;
        max-width: 1122px;
        height: 667px;
        background-color: var(--color-bg-card);
        border-radius: var(--border-radius-card);
        box-shadow: var(--shadow-card);
        overflow: hidden;
	}

    .contact {
        display: grid;
        row-gap: 15px;
        grid-template-rows: 1fr min-content;
        color: var(--color-white);
    }

    .contact-info {
        display: grid;
        align-content: end;
        padding: var(--padding-card);
        background-color: var(--color-primary);
    }

    .social-links {
        padding: var(--padding-card);
        padding-bottom: calc(var(--padding-card) * 2.5);
        background-color: var(--color-primary);
    }

    .contact-info address {
        font-style: normal;
    }

    .contact-info .icon {
        width: 16px;
    }

    .contact-info .row {
        padding-top: var(--padding-card);
    }

    .label {
        font-weight: var(--font-weight-semibold);
        padding-bottom: 10px;
    }

    .social-link {
        margin-right: 5px;
    }

    .social-link:hover {
        opacity: 60%;
    }

    .social-link img {
        width: 20px;
    }

    .bio {
        position: relative;
        padding: var(--padding-card);
    }

    .photo {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: -65px;
        margin-top: auto;
        margin-bottom: auto;
        height: 550px;
        width: auto;
    }
</style>