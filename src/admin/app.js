import AuthLogo from './extensions/logo_auth.png';
import MenuLogo from './extensions/logo_menu.png';
import favicon from './extensions/favicon.ico';
import { synthwave } from './strapi-code-themes';
export default {
    config: {
        auth: {
            logo: AuthLogo,
          },
          menu: {
            logo: MenuLogo,
          },
          head: {
            favicon: favicon,
          },
          theme: {
              colors: synthwave,
            // colors:{
            //     danger100: '#403949', // TOGGLE OFF BG
            //     danger700: '#c13c58', // TOGGLE OFF COLOR
            //     neutral0: '#ffffff', // BACKGROUND SIDEBAR #241b2e
            //     neutral100: '#f6f6f9', // BACKGROUND CONTENT
            //     neutral150: '#ffffff', // DISABLED BUTTON BG #241b2e
            //     neutral200: '#dcdce4', // LINE THROUGH MIDDLE
            //     neutral500: '#8e8ea9', // MENU IDLE COLOR
            //     neutral600: '#9a96a4', // MENU HOVER COLOR
            //     neutral700: '#9a96a4', // MENU ACTIVE ICON COLOR
            //     neutral800: '#32324d', // TITLE COLORS
            //     neutral900: '#403949', // TOOLTIP BG
            //     primary100: '#f0f0ff', // MENU ACTIVE BG
            //     primary200: '#ffffff', // PLUS SIGN BG
            //     primary500: '#7f7145', // PRIMARY BUTTON HOVER
            //     primary600: '#bba551', // PRIMARY BUTTON COLOR
            //     primary700: '#33adae', // HIGHLIGHT COLOR
            //     secondary100: '#eafbe7', // INFO BOX COLOR
            //     success100: '#eafbe7', // SUCCESS BOX BG
            //     secondary200: '#ffd5b8',
            //     secondary500: '#eda164',
            //     secondary600: '#b0600b',
            //     secondary700: '#965800',
            // }
        },
        //   theme: {
        //     colors: {
        //       alternative100: '#f6ecfc',
        //       alternative200: '#e0c1f4',
        //       alternative500: '#ac73e6',
        //       alternative600: '#9736e8',
        //       alternative700: '#8312d1',
        //       danger700: '#b72b1a'
        //     },
        //   },
        // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
     notifications: { release: false },
      locales: [
        // 'ar',
        // 'fr',
      ],
      translations: {
        en: {
          "app.components.LeftMenu.navbrand.title": "Dashboard",
          "Auth.form.welcome.subtitle": "Log in to your account",
          "app.components.LeftMenu.navbrand.workplace": "Robert Kayanja Ministries",
          'Auth.form.welcome.title': "Welcome to Robert Kayanja!",
          "HomePage.welcome.congrats.content": "You are logged in as the first administrator.",
          "Settings.application.strapi-version": "RKM version",
          "Settings.application.strapiVersion": "RKM version",
          "Settings.permissions.users.listview.header.subtitle": "All the users who have access to the RKM admin panel",
          "app.components.HomePage.welcomeBlock.content.again": "We hope you are making progress on your project!. We are giving our best to improve the product based on your feedback.",
          "Documentation": "Robert Kayanja Ministries",
        },
      },

    },
    bootstrap(app) {
      console.log(app);
    },
  };