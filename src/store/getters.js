export default {
  // 默认第一个参数传的是state,第二个参数传的是getters对象（包含其他getter）
  // rootState, rootGetters是全局state与全局getters，在module时需要用到
  completeAge(state, getters, rootState, rootGetters) {
    if (state.age) {
      return state.age + '岁'
    } else {
      return '未知'
    }
  },
  completePlace(state, getters) {
    if (state.place) {
      return state.place
    } else {
      return '未知'
    }
  },
  // 第二个参数传的是getters对象
  completeTalk(state, getters) {
    return '我今年岁数' + getters.completeAge + '，来自' + getters.completePlace
  },
}
