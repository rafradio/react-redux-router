const selectDatas = state => state.counter.dataTable;
const selectButtonState = state => state.counter.buttonState;
const selectNavState = state => state.counter.navigatorLinkNav;
const selectCurrentDay = state => state.counter.currentDay;
const selectFlagForNextDay = state => state.counter.flagForNextDay;
const selectTitleByDate = (state, date) => state.counter.title.find(title => title.date == date);
const selectDatasByDate = (state, date) => state.counter.dataTable.find(datas => datas.date == date);

export { selectDatas, selectButtonState, selectNavState, selectCurrentDay, selectFlagForNextDay, selectTitleByDate, selectDatasByDate };