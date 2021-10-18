import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import VCalendar from 'v-calendar';

Vue.use(Vuetify);
Vue.use(VCalendar, {
    componentPrefix: 'vc'
});

export default new Vuetify({
});
