import * as __vite_glob_0_0 from "/resources/js/Pages/Auth/ForgotPass.vue";import * as __vite_glob_0_1 from "/resources/js/Pages/Auth/Login.vue";import * as __vite_glob_0_2 from "/resources/js/Pages/Auth/Registration.vue?t=1688071028188";import * as __vite_glob_0_3 from "/resources/js/Pages/Auth/ResetPass.vue";import * as __vite_glob_0_4 from "/resources/js/Pages/Cabinet/Achievements.vue";import * as __vite_glob_0_5 from "/resources/js/Pages/Cabinet/GetCourses.vue";import * as __vite_glob_0_6 from "/resources/js/Pages/Cabinet/Home.vue";import * as __vite_glob_0_7 from "/resources/js/Pages/Cabinet/MyCourses.vue";import * as __vite_glob_0_8 from "/resources/js/Pages/Contacts.vue";import * as __vite_glob_0_9 from "/resources/js/Pages/Courses.vue";import * as __vite_glob_0_10 from "/resources/js/Pages/EbookInner.vue";import * as __vite_glob_0_11 from "/resources/js/Pages/Ebooks.vue";import * as __vite_glob_0_12 from "/resources/js/Pages/Error.vue";import * as __vite_glob_0_13 from "/resources/js/Pages/Home.vue";import * as __vite_glob_0_14 from "/resources/js/Pages/News.vue";import * as __vite_glob_0_15 from "/resources/js/Pages/NewsInner.vue";import * as __vite_glob_0_16 from "/resources/js/Pages/PrivacyPolicy.vue";import '/resources/js/bootstrap.js';
import { createSSRApp, h } from '/node_modules/.vite/deps/vue.js?v=a3f48f60';
import { createInertiaApp } from '/node_modules/.vite/deps/@inertiajs_vue3.js?v=043bce34';
import { i18nVue } from '/node_modules/.vite/deps/laravel-vue-i18n.js?v=a71addb6';

createInertiaApp({
    resolve: name => {
      const pages = /* #__PURE__ */ Object.assign({"./Pages/Auth/ForgotPass.vue": __vite_glob_0_0,"./Pages/Auth/Login.vue": __vite_glob_0_1,"./Pages/Auth/Registration.vue": __vite_glob_0_2,"./Pages/Auth/ResetPass.vue": __vite_glob_0_3,"./Pages/Cabinet/Achievements.vue": __vite_glob_0_4,"./Pages/Cabinet/GetCourses.vue": __vite_glob_0_5,"./Pages/Cabinet/Home.vue": __vite_glob_0_6,"./Pages/Cabinet/MyCourses.vue": __vite_glob_0_7,"./Pages/Contacts.vue": __vite_glob_0_8,"./Pages/Courses.vue": __vite_glob_0_9,"./Pages/EbookInner.vue": __vite_glob_0_10,"./Pages/Ebooks.vue": __vite_glob_0_11,"./Pages/Error.vue": __vite_glob_0_12,"./Pages/Home.vue": __vite_glob_0_13,"./Pages/News.vue": __vite_glob_0_14,"./Pages/NewsInner.vue": __vite_glob_0_15,"./Pages/PrivacyPolicy.vue": __vite_glob_0_16});
      return pages[`./Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        createSSRApp({ render: () => h(App, props) })
        .use(plugin)
        .use(i18nVue, {
            resolve: async lang => {
                const langs = /* #__PURE__ */ Object.assign({"../lang/en.json": () => import("/resources/lang/en.json?import"),"../lang/es.json": () => import("/resources/lang/es.json?import"),"../lang/id.json": () => import("/resources/lang/id.json?import"),"../lang/kz.json": () => import("/resources/lang/kz.json?import"),"../lang/ms.json": () => import("/resources/lang/ms.json?import"),"../lang/th.json": () => import("/resources/lang/th.json?import"),"../lang/vi.json": () => import("/resources/lang/vi.json?import"),"../lang/zh.json": () => import("/resources/lang/zh.json?import")});
                return await langs[`../lang/${lang}.json`]();
            }
        })
        .directive('click-outside', {
            mounted(el, binding) {
                el.clickOutsideEvent = function(event) {
                    if (!(el === event.target || el.contains(event.target))) {
                        binding.value(false);
                    }
                }
                document.body.addEventListener('click', el.clickOutsideEvent, {passive: true});
            },
            beforeUnmount(el) {
                document.body.removeEventListener('click', el.clickOutsideEvent, {passive: true});
            }
        })
        .mount(el)
    },
  });
