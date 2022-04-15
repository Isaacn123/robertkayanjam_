import AuthLogo from './extensions/logo_auth.png';
import MenuLogo from './extensions/logo_menu.png';
import favicon from './extensions/favicon.ico';
import { synthwave } from 'strapi-code-themes';
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