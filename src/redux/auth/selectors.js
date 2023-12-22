export const selectIsLoggedIn = state => state.auth.isLoggedIn;
console.log(`selectIsLoggedIn`, selectIsLoggedIn);
export const selectUser = state => state.auth.user;
console.log(`selectUser`, selectUser);
export const selectIsRefresh = state => state.auth.isRefresh;
console.log(`selectIsRefresh`, selectIsRefresh);
