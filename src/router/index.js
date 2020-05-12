import Vue from "vue";
import VueRouter from "vue-router";
import blogHome from "../views/blogHome.vue";

Vue.use(VueRouter);

const routes = [
  { path: "*", redirect: "/404", hidden: true },
  // {
  //   path: "/404",
  //   name: "404",
  //   component: () => import("../views/errorPage/404"),
  //   hidden: true
  // },
  {
    path: "/",
    name: "blogHome",
    component: blogHome,
    meta: {
      title: "首页"
    }
  },
  {
    path: "/loginRegister",
    name: "loginRegister",
    component: () => import("../views/loginRegister.vue"),
    meta: {
      title: "登录注册"
    }
  },
  {
    path: "/reset",
    name: "reset",
    component: () => import("../views/reset.vue"),
    meta: {
      title: "手机验证"
    }
  },
  {
    path: "/resetEmail",
    name: "resetEmail",
    component: () => import("../views/resetEmail.vue"),
    meta: {
      title: "邮箱验证"
    }
  },
  {
    path: "/blogArticle",
    name: "blogArticle",
    component: () => import("../views/blogArticle.vue"),
    meta: {
      title: "博客文章"
    }
  },
  {
    path: "/blogCorpus",
    name: "blogCorpus",
    component: () => import("../views/blogCorpus.vue"),
    meta: {
      title: "博客文集"
    }
  },
  {
    path: "/blogWrite",
    name: "blogWrite",
    component: () => import("../views/blogWrite/blogWrite.vue"),
    redirect: "/blogWrite/works",
    meta: {
      title: "发布文章-left"
    },
    children: [
      {
        path: "collectedWorks",
        name: "collectedWorks",
        component: () => import("../components/blogWrite/collectedWorks.vue"),
        meta: {
          active: "/blogWrite/collectedWorks",
          title: "发布文集"
        }
      },
      {
        path: "works",
        name: "works",
        component: () => import("../components/blogWrite/works.vue"),
        meta: {
          active: "/blogWrite/works",
          title: "发布文章"
        }
      }
    ]
  },
  {
    path: "/blogWrite/collectedIn/:id/:newWork",
    name: "collectedIn",
    component: () => import("../views/blogWrite/collectedIn.vue"),
    meta: {
      active: "/blogWrite/collectedWorks",
      title: "文集中的文章"
    }
    // props: true
  },
  {
    path: "/blogWrite/newWork/:colId/:articleId",
    name: "newWork",
    component: () => import("../views/blogWrite/newWork.vue"),
    meta: {
      active: "/blogWrite/collectedWorks",
      title: "文集中的文章详情"
    }
  },
  {
    path: "/blogSearch",
    name: "blogSearch",
    component: () => import("../views/blogSearch.vue"),
    meta: {
      title: "博客搜索"
    },
    redirect: "/blogSearch/searchUsers",
    children: [
      {
        path: "searchUsers",
        name: "searchUsers",
        component: () => import("../components/blogSearch/searchUsers.vue"),
        meta: {
          active: "/blogSearch/searchUsers",
          title: "搜索用户"
        }
      },
      {
        path: "searchWorks",
        name: "searchWorks",
        component: () => import("../components/blogSearch/searchWorks.vue"),
        meta: {
          active: "/blogSearch/searchWorks",
          title: "搜索文章"
        }
      },
      {
        path: "searchCorpus",
        name: "searchCorpus",
        component: () => import("../components/blogSearch/searchCorpus.vue"),
        meta: {
          active: "/blogSearch/searchCorpus",
          title: "搜索文集"
        }
      }
    ]
  },
  {
    path: "/blogMine",
    name: "blogMine",
    component: () => import("../views/blogMine.vue"),
    meta: {
      title: "我的主页"
    },
    redirect: "/blogMine/mineMassage",
    children: [
      {
        path: "mineMassage",
        name: "mineMassage",
        component: () =>
          import("../components/blogMine/mineMiddle/mineMassage.vue"),
        meta: {
          active: "/blogMine/mineMassage",
          title: "个人信息"
        }
      },
      {
        path: "mineAttention",
        name: "mineAttention",
        component: () =>
          import("../components/blogMine/mineMiddle/mineAttention.vue"),
        meta: {
          active: "/blogMine/mineAttention",
          title: "我的关注"
        }
      },
      {
        path: "mineLike",
        name: "mineLike",
        component: () =>
          import("../components/blogMine/mineMiddle/mineLike.vue"),
        meta: {
          active: "/blogMine/mineLike",
          title: "我的喜欢"
        }
      },
      {
        path: "mineArtical",
        name: "mineArtical",
        component: () =>
          import("../components/blogMine/mineMiddle/mineArtical.vue"),
        meta: {
          active: "/blogMine/mineArtical",
          title: "我的文章"
        }
      },
      {
        path: "mineCorpus",
        name: "mineCorpus",
        component: () =>
          import("../components/blogMine/mineMiddle/mineCorpus.vue"),
        meta: {
          active: "/blogMine/mineCorpus",
          title: "我的文集"
        }
      },
      {
        path: "mineSetting",
        name: "mineSetting",
        component: () =>
          import("../components/blogMine/mineMiddle/mineSetting.vue"),
        meta: {
          active: "/blogMine/mineSetting",
          title: "账户设置"
        }
      }
    ]
  },
  {
    path: "/blogPeople",
    name: "blogPeople",
    component: () => import("../views/blogPeople.vue"),
    meta: {
      title: "用户主页"
    },
    redirect: "/blogPeople/peopleCorpus",
    children: [
      {
        path: "peopleCorpus",
        name: "peopleCorpus",
        component: () =>
          import(
            "../components/blogPeople/peopleMiddle/peopleRight/peopleCorpus.vue"
          ),
        meta: {
          active: "/blogPeople/peopleCorpus",
          title: "用户文集"
        }
      },
      {
        path: "peopleArtical",
        name: "peopleArtical",
        component: () =>
          import(
            "../components/blogPeople/peopleMiddle/peopleRight/peopleArtical.vue"
          ),
        meta: {
          active: "/blogPeople/peopleArtical",
          title: "用户文章"
        }
      },
      {
        path: "peopleLike",
        name: "peopleLike",
        component: () =>
          import(
            "../components/blogPeople/peopleMiddle/peopleRight/peopleLike.vue"
          ),
        meta: {
          active: "/blogPeople/peopleLike",
          title: "用户喜欢"
        }
      }
    ]
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  // console.log(1);
  // if (to.path === "/loginRegister") {
  //   next();
  // } else {
  //   let token = localStorage.getItem("Authorization");
  //   console.log(token);
  //   if (token === "null" || token === "") {
  //     next("/loginRegister");
  //   } else {
  //     next();
  //   }
  // }
  //to 要去的路由配置
  //from 当前的路由配置
  //next 一定要调用，让to的路由配置继续生效，比如如果去登陆直接next(),否则判断token是否存在，如果存在就next()

  if (to.path === "/loginRegister") return next(); //使用return，不需要写else

  //判断其他页面是否有token
  const token = localStorage.getItem("Authorization");

  //存在继续往后走
  if (token) return next();

  // this.$router.push({name:'login'}) #没有this,无法使用
  router.push({
    name: "loginRegister"
  });
});

export default router;
