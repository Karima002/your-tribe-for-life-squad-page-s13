<script>
    import squadpageSvg from '$lib/assets/squadpage.svg';
    import menuSvg from '$lib/assets/menu.svg'; // menu icon
    import Header from '$lib/components/Header.svelte';
    import avatar from '$lib/assets/default-avatar.png';

    // Data uit +page.server.js
    let { data } = $props();
    const member = data.member;

</script>
<Header />
<main>
    <ul class="student-grid">
        <nav class="back">
            <a href="/" class="back-button">Terug naar Squadpage</a>
          </nav>         
        <li>
          <article class="card">
            <div class="avatar">
              <img src={member.avatar ? member.avatar : avatar } alt={`Mugshot of ${member.name}`} width="130" height="auto" /> <!--standaard avatar als er geen avatar is --> 
            </div>
              <a class="name" href={`/members/${member.id}`}>{member.name}</a>
          </article>
        </li> 
    </ul>
</main>
<style>


  * {
       box-sizing: border-box;
       scroll-behavior: smooth;
       padding: 0;
       margin: 0;
     }
  
  
     .card {
       background: var(--card-color);
       border: 1px solid var(--card-color);
       border-radius: 10px;
       padding: 1.5rem;       
       text-align: center;
       width: 400px;         
       margin: 2rem auto;
  }
  
  
  a{
       text-decoration: none;
       color: var(--text-color);
     }
      .avatar img {
       display: block;
       width: 100%;
       aspect-ratio: 3 / 4;
       object-fit: cover;
       border-radius: 8px;
     }
      .name {
       margin: 0;
       font-size: var(--font-size-small);
       font-family: var(--font-regular);
     }
   </style>
  