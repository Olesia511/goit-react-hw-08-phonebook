export const selectIsLoggedIn = state => state.auth.isLoggedIn;
// console.log(`selectIsLoggedIn`, selectIsLoggedIn);
export const selectUser = state => state.auth.user;

export const selectIsRefresh = state => state.auth.isRefresh;
