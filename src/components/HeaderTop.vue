<template>
  <div class="b-container">
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#"><img src="../assets/logo.png" alt=""></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
                <b-dropdown class="px-3 py-2"  variant="danger" text="Katalog">
                    <b-dropdown-item >First Action</b-dropdown-item>
                    <b-dropdown-item >Second Action</b-dropdown-item>
                    <b-dropdown-item >Third Action</b-dropdown-item>
                </b-dropdown>
       </b-nav-item>
       
      </b-navbar-nav>

      <b-navbar-nav>
        <b-form class="search">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Qidirmoq"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Topmoq</b-button>
        </b-form>
        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.search{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>