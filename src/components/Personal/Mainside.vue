<template>
  <div class="ma-t-12">
    <v-navigation-drawer
    permanent
    expand-on-hover
    >
    <v-list>
        <v-list-item class="px-2">
        <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/women/65.jpg"></v-img>
        </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
        <v-list-item-content>
            <v-list-item-title class="text-h6">
            PIPIPI
            </v-list-item-title>
            <v-list-item-subtitle>la242mk@naver.com</v-list-item-subtitle>
        </v-list-item-content>
        </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list
        nav
        dense
    >
        <v-list-item link>
        <v-list-item-icon>
            <v-icon>mdi-cat</v-icon>
        </v-list-item-icon>
        <v-list-item-title>My Cat</v-list-item-title>
        </v-list-item>
        <v-list-item link>
        <v-list-item-icon>
            <v-icon>mdi-heart</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Shared with me</v-list-item-title>
        </v-list-item>
        <v-list-item link>
        <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Starred</v-list-item-title>
        </v-list-item>
    </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    //
  }
</script>