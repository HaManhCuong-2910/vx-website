const setLoadingGlobalAction = ({ commit }: any, value: boolean) => {
  commit('setLoadingGlobal', value)
}

export const handleActions = {
  setLoadingGlobalAction
}
