<template>
    <header class="header">
        <router-link to="/">
            <div class="logo-wrap">
                <img :src="logo" alt="Logo" width="100">
                <p>Hier findet man alle beste Vitamine</p>

            </div>
        </router-link>
        <nav class="nav-bar">
            <router-link to="/about" class="nav__link">
                Über uns
            </router-link>
        </nav>
    </header>
</template>
<script setup>
    import logo from '../assets/logo.png'
</script>
<style>
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: white;
        flex-direction: column;
        margin-bottom: 2rem;
    }
    @media (min-width: 500px) {
  .header {
    flex-direction: row;
  }
}
    .logo-wrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        gap: 2rem;
    }
</style>