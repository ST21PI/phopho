<template>
    <v-app-bar
    app
    color="blue-grey"
    flat
    fixed
    >
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    <v-container class="py-0 fill-height">
    <div>
    </div>
    <!-- <v-spacer></v-spacer> -->
    <!-- <v-btn
        v-for="link in links"
        :key="link"
        text
        :to="{path: link}"
    >
        {{ link }}
        
    </v-btn> -->
    </v-container>
  </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Time',
        'Todo'
      ],
    }),
  }
</script>