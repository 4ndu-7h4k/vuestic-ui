<template>
  <div class="cards">
    <va-card class="card card-1">
      <va-card-title>
        <h3 class="va-h3 m-0">
          Get started
        </h3>
      </va-card-title>

      <va-card-content>
        <va-input
          stateful
          label="Email"
          class="mb-2"
        />
        <va-input
          label="City"
          class="mb-2"
          :rules="[(v) => v.length > 3]"
          :model-value="'Kyiv'"
          success
        />
        <va-select
          stateful
          label="Country"
          class="mb-2"
          :options="['Ukraine', 'Georgia', 'Poland']"
          :error-messages="['Country is required']"
          error
        />
      </va-card-content>

      <va-card-actions align="between">
        <va-button
          preset="secondary"
          color="secondary"
        >
          Go back
        </va-button>
        <va-button>Login</va-button>
      </va-card-actions>
    </va-card>

    <va-card class="card card-2">
      <va-card-content>
        <table class="w-full">
          <tr>
            <td>Amount</td>
            <td>
              <va-slider
                :model-value="40"
                stateful
              />
            </td>
          </tr>
          <tr>
            <td>Package</td>
            <td><va-switch stateful /></td>
          </tr>
          <tr>
            <td>Review</td>
            <td>
              <va-rating
                stateful
                :model-value="4.5"
                halves
              />
            </td>
          </tr>
        </table>
        <va-alert class="my-4" color="warning" icon="info">
          You can't change your review after sending
        </va-alert>
        <va-checkbox
          stateful
          label="I agree with all terms!!!"
        />
      </va-card-content>
      <va-divider />
      <va-card-actions align="between">
        <div />
        <va-button>Send review</va-button>
      </va-card-actions>
    </va-card>

    <div class="card card-3">
      <va-date-picker />
    </div>

    <div class="card card-4">
      <va-sidebar>
        <va-sidebar-item
          v-for="item in ['Home', 'Cabinet', 'Gallery', 'Shop', 'Logout']"
          :key="item"
          :active="item === 'Shop'"
        >
          <va-sidebar-item-content>{{ item }}</va-sidebar-item-content>
        </va-sidebar-item>
      </va-sidebar>
    </div>

    <div class="card card-6">
      <va-alert color="info">Read this information</va-alert>
    </div>

    <div class="card card-7">
      <va-tabs
        stateful
        :model-value="0"
        grow
      >
        <template #tabs>
          <va-tab
            v-for="tab in ['One', 'Two', 'Three']"
            :key="tab"
          >
            {{ tab }}
          </va-tab>
        </template>
      </va-tabs>
    </div>

    <div class="card card-8">
      <va-card
        color="primary"
        gradient
      >
        <va-card-content>
          <h2 class="m-0">
            12:00 pm
          </h2>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cards {
  position: relative;
  height: 500px;
  overflow: hidden;
  margin: 16px 0;
  background: var(--va-background-primary);
}

.card {
  position: absolute;
  width: 33%;

  &-1 {
    right: 16px;
    z-index: 3;
    top: 50%;
    min-width: 300px;
    transform: translateY(-50%);
  }

  &-2 {
    left: 20%;
    z-index: 4;
    max-width: 400px;
    top: 16px;
    min-width: 300px;
  }

  &-3 {
    top: 70%;
    left: 50%;
    z-index: 1;
    transform: translateY(-50%);
  }

  &-4 {
    height: 100%;
    z-index: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &-5 {
    top: 10%;
    right: 10%;
  }

  &-6 {
    bottom: 5%;
    right: 10%;
    z-index: 2;
    min-width: 250px;
  }

  &-7 {
    right: 0;
    top: 36px;
    z-index: 0;
  }

  &-8 {
    left: 16px;
    bottom: 16px;
  }
}
</style>
