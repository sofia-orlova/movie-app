export default {
  data () {
    return {
      navigation: {
        leftNavigation: {
          menu: [
            {
              title: this.$t('menu.homepage.title'),
              pageIndex: 'index'
            },
            {
              title: this.$t('menu.films.title'),
              subMenu: [
                {
                  title: this.$t('menu.films.subMenu.popular'),
                  pageIndex: 'popular-films'
                }
              ]
            }

          ]
        },
        rightNavigation: {
          menu: [
            {
              title: this.$t('menu.contactUs.title'),
              pageIndex: 'contact-us'
            }
          ]
        },
        footer: {
          footerNav: [
            {
              title: this.$t('menu.main.title'),
              subMenu: [
                {
                  title: this.$t('menu.main.subMenu.about'),
                  pageIndex: 'contact-us'
                }
              ]
            },
            {
              title: this.$t('menu.participation.title'),
              subMenu: [
                {
                  title: this.$t('menu.participation.subMenu.articles'),
                  pageIndex: 'contact-us'
                }
              ]
            },
            {
              title: this.$t('menu.community.title'),
              subMenu: [
                {
                  title: this.$t('menu.community.subMenu.guides'),
                  pageIndex: 'contact-us'
                }
              ]
            },
            {
              title: this.$t('menu.rights.title'),
              subMenu: [
                {
                  title: this.$t('menu.rights.subMenu.termsOfUse'),
                  pageIndex: 'contact-us'
                }
              ]
            }
          ]
        }
      }
    }
  },
  i18n: {
    messages: {
      ru: {
        menu: {
          homepage: {
            title: 'Главная'
          },
          films: {
            title: 'Фильмы',
            subMenu: {
              popular: 'Популярные'
            }
          },
          contactUs: {
            title: 'Контакты'
          },
          main: {
            title: 'Главное',
            subMenu: {
              about: 'О TMDb'
            }
          },
          participation: {
            title: 'Учавствуйте',
            subMenu: {
              articles: 'Писание об участии'
            }
          },
          community: {
            title: 'Сообщество',
            subMenu: {
              guides: 'Руководства'
            }
          },
          rights: {
            title: 'О праве',
            subMenu: {
              termsOfUse: 'Условия использования'
            }
          }
        }
      }
    }
  }
}
