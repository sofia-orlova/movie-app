export default {
  data () {
    return {
      navigation: {
        leftNavigation: {
          menu: [
            {
              title: this.$t('menu.films.title'),
              subMenu: [
                {
                  title: this.$t('menu.films.subMenu.popular'),
                  pageIndex: 'popular-films'
                },
                {
                  title: this.$t('menu.films.subMenu.watchingNow'),
                  pageIndex: 'watching-now-films'
                },
                {
                  title: this.$t('menu.films.subMenu.comingSoon'),
                  pageIndex: 'coming-soon-films'
                },
                {
                  title: this.$t('menu.films.subMenu.topRated'),
                  pageIndex: 'top-rated-films'
                }
              ]
            },
            {
              title: this.$t('menu.tvShows.title'),
              subMenu: [
                {
                  title: this.$t('menu.tvShows.subMenu.popular'),
                  pageIndex: 'popular-tv-shows'
                },
                {
                  title: this.$t('menu.tvShows.subMenu.airingToday'),
                  pageIndex: 'airing-today-tv-shows'
                },
                {
                  title: this.$t('menu.tvShows.subMenu.onTv'),
                  pageIndex: 'on-tv-shows'
                },
                {
                  title: this.$t('menu.tvShows.subMenu.topRated'),
                  pageIndex: 'top-rated-tv-shows'
                }
              ]
            },
            {
              title: this.$t('menu.people.title'),
              subMenu: [
                {
                  title: this.$t('menu.people.subMenu.popular'),
                  pageIndex: 'popular-people'
                }
              ]
            },
            {
              title: this.$t('menu.more.title'),
              subMenu: [
                {
                  title: this.$t('menu.more.subMenu.discussions'),
                  pageIndex: 'discussions'
                },
                {
                  title: this.$t('menu.more.subMenu.leaderboard'),
                  pageIndex: 'leaderboard'
                },
                {
                  title: this.$t('menu.more.subMenu.support'),
                  pageIndex: 'support'
                },
                {
                  title: this.$t('menu.more.subMenu.api'),
                  pageIndex: 'api-info'
                }
              ]
            }
          ]
        },
        rightNavigation: {
          menu: [
            {
              title: '',
              icon: 'el-icon-plus',
              subMenu: [
                {
                  title: this.$t('menu.addNew.subMenu.addNewFilm'),
                  pageIndex: 'support'
                },
                {
                  title: this.$t('menu.addNew.subMenu.addNewTvShow'),
                  pageIndex: 'support'
                }
              ]
            },
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
                  pageIndex: 'about'
                },
                {
                  title: this.$t('menu.main.subMenu.support'),
                  pageIndex: 'support'
                },
                {
                  title: this.$t('menu.main.subMenu.supportForums'),
                  pageIndex: 'support-forums'
                },
                {
                  title: this.$t('menu.main.subMenu.api'),
                  pageIndex: 'api-info'
                },
                {
                  title: this.$t('menu.main.subMenu.systemStatus'),
                  pageIndex: 'system-status'
                }
              ]
            },
            {
              title: this.$t('menu.participation.title'),
              subMenu: [
                {
                  title: this.$t('menu.participation.subMenu.articles'),
                  pageIndex: 'articles'
                },
                {
                  title: this.$t('menu.participation.subMenu.otherApps'),
                  pageIndex: 'other-apps'
                },
                {
                  title: this.$t('menu.participation.subMenu.addNewFilm'),
                  pageIndex: 'support'
                },
                {
                  title: this.$t('menu.participation.subMenu.addNewTvShow'),
                  pageIndex: 'support'
                }
              ]
            },
            {
              title: this.$t('menu.community.title'),
              subMenu: [
                {
                  title: this.$t('menu.community.subMenu.guides'),
                  pageIndex: 'about'
                },
                {
                  title: this.$t('menu.community.subMenu.forum'),
                  pageIndex: 'forum'
                },
                {
                  title: this.$t('menu.community.subMenu.hallOfFame'),
                  pageIndex: 'hall-of-fame'
                },
                {
                  title: this.$t('menu.community.subMenu.tweeter'),
                  pageIndex: 'support'
                }
              ]
            },
            {
              title: this.$t('menu.rights.title'),
              subMenu: [
                {
                  title: this.$t('menu.rights.subMenu.termsOfUse'),
                  pageIndex: 'terms-of-use'
                },
                {
                  title: this.$t('menu.rights.subMenu.apiTermsOfUse'),
                  pageIndex: 'about'
                },
                {
                  title: this.$t('menu.rights.subMenu.privacyPolicy'),
                  pageIndex: 'privacy-policy'
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
          films: {
            title: 'Фильмы',
            subMenu: {
              popular: 'Популярные',
              watchingNow: 'Смотрят сейчас',
              comingSoon: 'Ожидаемые',
              topRated: 'Лучшие'
            }
          },
          tvShows: {
            title: 'Сериалы',
            subMenu: {
              popular: 'Популярные',
              airingToday: 'В эфире сегодня',
              onTv: 'На телевидении',
              topRated: 'Лучшие'
            }
          },
          people: {
            title: 'Люди',
            subMenu: {
              popular: 'Популярные'
            }
          },
          more: {
            title: 'Еще',
            subMenu: {
              discussions: 'Обсуждения',
              leaderboard: 'Доска почета',
              support: 'Поддержка',
              api: 'API'
            }
          },
          addNew: {
            subMenu: {
              addNewFilm: 'Добавить новый фильм',
              addNewTvShow: 'Добавить новый сериал'
            }
          },
          contactUs: {
            title: 'Контакты'
          },
          main: {
            title: 'Главное',
            subMenu: {
              about: 'О TMDb',
              support: 'Связаться с нами',
              supportForums: 'Форумы поддержки',
              api: 'API',
              systemStatus: 'Статус системы'
            }
          },
          participation: {
            title: 'Учавствуйте',
            subMenu: {
              articles: 'Писание об участии',
              otherApps: 'Сторонние приложения',
              addNewFilm: 'Добавить новый фильм',
              addNewTvShow: 'Добавить новый сериал'
            }
          },
          community: {
            title: 'Сообщество',
            subMenu: {
              guides: 'Руководства',
              forum: 'Обсуждения',
              hallOfFame: 'Доска почета',
              tweeter: 'Twitter'
            }
          },
          rights: {
            title: 'О праве',
            subMenu: {
              termsOfUse: 'Условия использования',
              apiTermsOfUse: 'API Правила использования',
              privacyPolicy: 'Политика конфеденциальности'
            }
          }
        }
      }
    }
  }
}
