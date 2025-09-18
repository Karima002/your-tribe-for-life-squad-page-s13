<script>
    import squadpage from '$lib/assets/squadpage.svg';
    import menuIcon from '$lib/assets/menu-icon.svg';
    // import wolkzwart from '$lib/assets/wolkzwart.svg';
    // import wolkwit from '$lib/assets/wolkwit.svg';
    import menu from '$lib/assets/menu.svg';
    import flowers from '$lib/assets/flower.svg';


    let menuOpen = false; //menu is standaard gesloten (false)
</script>

<header>
    <nav>

        <a href="/">
            <img class="squadpage-img" src={squadpage} alt="squadpage sketch">
        </a>

        <button class="menu" on:click={() => menuOpen = true}> <!-- open menu button -->
            <img class="menu-icon" src={menuIcon} alt="menu icon">
            <span>Menu</span>
        </button>

        

            <ul class="navigation" class:open={menuOpen}> <!-- navigation menu, class 'open' toegevoegd als menuOpen true is -->

                <button class="button-close-menu" on:click={() => menuOpen = false}> <!-- close menu button -->
                    <img src={menuIcon} alt="close menu icon" width="60" height="60">
                    <span>Sluit</span>
                </button>

                <img class="menu-image" src={menu} alt="svg of a menu text" width="400">

                <img class="flower-image" src={flowers} alt="svg of a flowers" width="350">


                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/squad2e">Squad 2E</a>
                </li>
                <li>
                    <a href="/squad2f">Squad 2F</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
    </nav>
</header>

<style>
    nav {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-content: center;
    }

    button {
        all: unset;
        cursor: pointer;
    }

    button:focus-visible {
        outline: 2px solid var(--accent-color);
        outline-offset: .2em;
    }

    .squadpage-img {
        @media (min-width: 300px) {
            width: 15em;
            height: 5em;
        }

        @media (min-width: 724px) {
            width: 40em;
            height: 10em;
        }
    }

    .menu {
        display: flex;
        align-items: center;
        gap: .2em;
        flex-direction: column;
        position: absolute;
        top: 1.9em;
        right: 1.5em;
        cursor: pointer;
        font-size: var(--font-size-menu);
        @media (min-width: 724px) {
            top: 1.5em;
            font-size: var(--font-size-small);
        }
        
    }

    .menu-icon {
        width: 2em;
        height: 2em;
        @media (min-width: 724px) {
            width: 3em;
            height: 3em;
        }
    }
    .button-close-menu {
        display: flex;
        align-items: center;
        gap: .3em;
        flex-direction: column;
        position: absolute;
        top: 3em;
        right: 1.5em;
        cursor: pointer;
        }

    span{
        font-family: var(--font-regular);
        font-size: var(--font-size-xsmall);

    }

    .navigation {
        position: fixed;
        left: 0;
        right: 0;
        top: -2em;
        bottom: -2em;
        translate: -120% 0%; /* verberg menu buiten scherm */
        transition: translate .3s;
        background-color: var(--background-color);
        z-index: 1;
        list-style: none;
    }

    .navigation.open {
        translate: 0% 0%; /* toon menu */
    }

    .menu-image {
        display: block;
        margin: 2em auto 0 auto;
    }
   
   .flower-image {
        position: absolute;
        top: .7em;
        left: 0;
    }

    .navigation li {
        text-align: center;
        margin: 2em;
        font-size: var(--font-size-medium);
        font-family: var(--font-regular);
        &:hover{
            text-decoration: underline;
        }
    }

    .navigation a {
        color: var(--text-color);
        text-decoration: none;
    }

    
</style>