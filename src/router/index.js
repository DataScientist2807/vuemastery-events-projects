import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/event/EventList.vue";
import AboutView from "../views/AboutView.vue";
import EventDetails from "../views/event/EventDetails.vue";
import EventLayout from "../views/event/Layout.vue";
import EventRegister from "../views/event/EventRegister.vue";
import EventEdit from "../views/event/EventEdit.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "/about-us",
    name: "about",
    component: AboutView,
    alias: "/about",
  },
  /* {
    path: "/about",
    redirect: { name: "about" },
  }, */
 /*  {
    path: "/event/:id",
    redirect: () => {
      return { name: "EventDetails" };
    }, */
    {
      path: "/event/:afterEvent(.*)",
      redirect: to => {
        return { path: "/events/" + to.params.afterEvent };
      },
    /* children: [
      { path: 'register', redirect: () => ({ name: 'EventRegister'})},
      { path: 'edit', redirect: () => ({ name: 'EventEdit'})},
    ] */
  },
  {
    path: "/events/:id",
    name: "EventLayout",
    props: true,
    component: EventLayout,
    children: [
      {
        path: "",
        name: "EventDetails",
        component: EventDetails,
      },
      {
        path: "register",
        name: "EventRegister",
        component: EventRegister,
      },
      {
        path: "edit",
        name: "EventEdit",
        component: EventEdit,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
