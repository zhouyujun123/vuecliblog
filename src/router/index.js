import Vue from "vue";
import VueRouter from "vue-router";
import blogHome from "../views/blogHome.vue";

Vue.use(VueRouter);

const routes = [{
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
    path: "/blogWrite",
    name: "blogWrite",
    component: () => import("../views/blogWrite/blogWrite.vue"),
    redirect: "/blogWrite/works",
    meta: {
      title: "发布文章-left"
    },
    children: [{
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
    path: "/blogWrite/collectedWorks/collectedIn/:id/:newWork",
    name: "collectedIn",
    component: () => import("../views/blogWrite/collectedIn.vue"),
    meta: {
      active: "/blogWrite/collectedWorks",
      title: "文集中的文章"
    }
    // props: true
  },
  {
    path: "/blogWrite/collectedWorks/collectedIn/newWork/:colName",
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
    children: [{
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
    children: [{
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
          active: "/blogMine/mineMassage",
          title: "我的关注"
        }
      },
      {
        path: "mineLike",
        name: "mineLike",
        component: () =>
          import("../components/blogMine/mineMiddle/mineLike.vue"),
        meta: {
          active: "/blogMine/mineMassage",
          title: "我的喜欢"
        }
      },
      {
        path: "mineArtical",
        name: "mineArtical",
        component: () =>
          import("../components/blogMine/mineMiddle/mineArtical.vue"),
        meta: {
          active: "/blogMine/mineMassage",
          title: "我的文章"
        }
      },
      {
        path: "mineCorpus",
        name: "mineCorpus",
        component: () =>
          import("../components/blogMine/mineMiddle/mineCorpus.vue"),
        meta: {
          active: "/blogMine/mineMassage",
          title: "我的文集"
        }
      },
      {
        path: "mineSetting",
        name: "mineSetting",
        component: () =>
          import("../components/blogMine/mineMiddle/mineSetting.vue"),
        meta: {
          active: "/blogMine/mineMassage",
          title: "账户设置"
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

export default router;