import Vue from 'vue';
import Router from 'vue-router';
import ContactList from '@/components/ContactList';
import ContactInfo from '@/components/ContactInfo';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/contacts',
            name: 'ContactList',
            component: ContactList,

            children : [
                {
                    path: '/info',
                    name: 'ContactInfo',
                    component: ContactInfo,
                }
            ]
        },
    ],
});

export default router
