import { createRouter, createWebHistory } from "vue-router";
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./components/nav/NotFound.vue";
import TeamsFooter from "./components/teams/TeamsFooter.vue";
import UsersFooter from "./components/users/UsersFooter.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "teams", path: "/", redirect: "/teams", meta: { needsAuth: true } },
    {
      path: "/teams",
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: "team-members",
          path: ":teamId",
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: "/users",
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      // beforeEnter(to, from, next) {} // just like beforeEach, but for a single path
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition; // when returns to back page, is back in the last position
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth) {
    confirm("Needs Auth!");
    next();
  } else {
    next();
  }
  console.log(to, from);
  // if (to.name === "team-members") {
  //   next();
  // } else {
  //   next({ name: "some-authentication-page", params: { teamId: "t2" } });
  // }
  next();
});

router.afterEach((to, from) => {
  // sending analytics data
});

export default router;
