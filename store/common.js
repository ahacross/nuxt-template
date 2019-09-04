export const state = () => ({
  locales: ['en', 'ko'],
  locale: 'ko'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

export const actions = {
  SET_LANG(commit, locale) {
    commit('SET_LANG', locale)
    // $i18n.locale = locale
  }
}
