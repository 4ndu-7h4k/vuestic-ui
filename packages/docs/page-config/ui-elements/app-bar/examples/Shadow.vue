<template>
  <div
    class="relative max-h-32 border border-solid border-black overflow-hidden flex flex-col"
  >
    <va-app-bar
      shadow-on-scroll
      color="primary"
      shadow-color="danger"
      target="#va-app-bar-shadow"
    >
      <va-button
        icon="home"
        color="textInverted"
        preset="plain"
      />
      <va-button
        icon="info"
        color="textInverted"
        preset="plain"
      />
      <va-button
        icon="battery"
        color="textInverted"
        preset="plain"
      />
      <va-spacer />
      <va-button
        color="textInverted"
        preset="plain"
      >
        Login
      </va-button>
      <va-button-dropdown
        preset="plain"
        color="textInverted"
        icon-color="#fff"
        stick-to-edges
      >
        Content
      </va-button-dropdown>
    </va-app-bar>

    <div id="va-app-bar-shadow">
      .
    </div>
  </div>
</template>

<style scope>
#va-app-bar-shadow {
  padding-bottom: 500px;
  overflow: auto;
}
</style>
