import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Setup a LDAP Server (OpenLDAP)",
  description: "A guide to setup a LDAP server on a virtual machine using VirtualBox.",
  base: "/setup_ldap_server/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sagedemage/setup_ldap_server' }
    ]
  }
})
