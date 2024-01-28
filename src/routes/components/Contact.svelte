<script>
    import email from '$lib/icons/email-icon.svg';
    import phone from '$lib/icons/phone-icon.svg';
	import Socials from './Socials.svelte';
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

    <Socials />
</div>

<style>
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
</style>