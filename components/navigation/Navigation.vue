<style lang="scss">

#main__navigation {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: white;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav--left {
    flex: 3;
    .nav--grid {
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: space-between;
      .nav--item {
      }
    }
  }
  .nav--right {
    flex: 2;
    .nav--grid {
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: flex-end;
      .nav--item {
        &.brand {
          a {
            font-size: 1.8em;
            font-weight: bold;
          }
        }
      }
    }
  }

}


//TYPW



</style>

<template>
  <nav id="main__navigation">

    <div class="nav--left">
      <div class="nav--grid">
        <div class="nav--item">
          <a class="nav--link" href="#">Work</a>
        </div>
        <div class="nav--item">
          <a class="nav--link" href="#">About</a>
        </div>
        <div class="nav--item">
          <a class="nav--link" href="#">Services</a>
        </div>
        <div class="nav--item">
          <a class="nav--link" href="#">News</a>
        </div>
        <div class="nav--item">
          <a class="nav--link" href="#">Learn</a>
        </div>
      </div>
    </div>

    <div class="nav--right">
      <div class="nav--grid">
        <div class="nav--item brand">
          <a class="nav--link" href="#">Abrakadabra</a>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
export default {};
</script>
