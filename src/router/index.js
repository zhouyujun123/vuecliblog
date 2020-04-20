import Vue from "vue";
import VueRouter from "vue-router";
import blogHome from "../views/blogHome.vue";

Vue.use(VueRouter);

const routes = [
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
    path: "/bolgAuthor",
    name: "bolgAuthor",
    component: () => import("../views/bolgAuthor.vue"),
    meta: {
      title: "博客作者推荐"
    }
  },
  {
    path: "/blogWrite",
    name: "blogWrite",
    component: () => import("../views/blogWrite/blogWrite.vue"),
    redirect: "/blogWrite/collectedWorks",
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
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
