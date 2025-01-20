import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Make a Raspberry Pi Into a LDAP Server",
  description: "A guide to make a Raspberry Pi into a LDAP server.",
  base: "/make_raspberry_pi_into_ldap_serve/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sagedemage/make_raspberry_pi_into_ldap_serve' }
    ]
  }
})
