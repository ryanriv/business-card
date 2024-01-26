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
    <div class="profile">
        <div class="photo">
            <enhanced:img src={photo} class="photo" alt="Zac Patrick" />
        </div>

        <div class="bio">
            <h1 class="heading-large name">
                <span class="text-primary">Zac</span>
                <br />
                Patrick
            </h1>
            <span class="text-semibold">Front-end Developer</span>
            <span class="bullet">&bull;</span>
            <span class="text-semibold">San Francisco</span>

            <p>High accomplishment and user-focused Front-end Developer adept in collaborating with UX and design teams 
                to plan the technical writing and execution of functional specifications for websites and applications.</p>
            
            <span class="text-semibold">Working with technologies:</span>

            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>GraphQL</li>
            </ul>
        </div>
    </div>
</section>

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

    .profile {
        padding: var(--padding-card);
        display: grid;
        grid-template-columns: min-content 1fr;
        height: 100%;
        position: relative;
        left: -65px;
    }

    .photo {
        margin-top: auto;
        margin-bottom: auto;
        height: 550px;
        width: 335px;
        object-fit: cover;
    }

    .bio {
        padding: var(--padding-card);
    }

    .name {
        text-transform: uppercase;
        font-weight: var(--font-weight-semibold);
        margin-bottom: 15px;
    }

    .bullet {
        display: inline-block;
        padding: 0 5px;
    }
</style>