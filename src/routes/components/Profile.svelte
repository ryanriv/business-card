<div class="profile-container">
    <div class="circle-corner"></div>
    <div class="profile">
        <div class="details">
            <h1 class="text-large name">
                <span class="text-primary">Sam</span>
                <br />
                Evans
            </h1>
        
            <div class="text-semibold">
                <div class="job-title">Photographer</div>
                <span class="bullet">&bull;</span>
                <div class="location">Monte Vista</div>
            </div>
        </div>
        <div class="skills">
            <p>I'm a passionate photographer with a deep fascination for the mysteries of the cosmos. Through my lens, 
                I specialize in bringing the wonders of the universe to life through captivating imagery.</p>
            
            <span class="text-semibold">Specialties:</span>
        
            <ul>
                <li>Astrophotography</li>
                <li>Deep Space Exploration</li>
                <li>Planetary Imaging</li>
                <li>Celestial Landscapes</li>
            </ul>
        </div>
    </div>
</div>

<style lang="scss">
    @import '../variables.scss';

    .profile-container {
        position: relative;
        padding: var(--padding-card);
    }

    .profile {
        margin-left: 250px;
    }

    .job-title {
        display: inline-block;
    }

    .location {
        display: inline-block;
        padding-top: 10px;
    }

    .circle-corner {
        position: absolute;
        top: -100px;
        right: -100px;
        z-index: 1;
        aspect-ratio: 1;
        width: 200px;
        border-radius: 100%;
        background-color: var(--color-primary);
    }

    .details {
        padding: var(--padding-card);
        padding-bottom: 0;
        margin-top: 40px;
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

    .skills {
        padding: var(--padding-card);
        padding-top: 0;
    }

    @media (max-width: $extra-large-breakpoint) {
        .profile {
            margin-left: 0;
        }
    }

    @media (max-width: $large-breakpoint) {
        .profile-container {
            padding: var(--padding-card);
            display: block;
        }

        .profile {
            margin-left: 0;
        }

        .circle-corner {
            display: none;
        }

        .job-title {
            display: block;
        }

        .location {
            display: block;
            font-weight: normal;
        }

        .bullet {
            display: none;
        }

        .details {
            grid-area: details;
            margin-top: 0;
            padding: 0;
        }

        .name {
            margin-top: 0;
            padding: 0;
        }

        .skills {
            grid-area: skills;
            padding: 0;
        }
    }
</style>