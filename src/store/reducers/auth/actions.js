
// constants for actions
import UserService from "../../../api/UserService";

export const constantAuth = {
    SET_IS_AUTH: 'SET_IS_AUTH',
    SET_ERROR: 'SET_ERROR',
    SET_USER: 'SET_USER',
    SET_IS_LOADING: 'SET_IS_LOADING'
}

// action creaters
export const authActionCreators = {
    setIsAuth: (isAuth) => ({
        type: constantAuth.SET_IS_AUTH,
        payload: isAuth
    }),
    setError: (error) => ({
        type: constantAuth.SET_ERROR,
        payload: error
    }),
    setUser: (user) => ({
        type: constantAuth.SET_USER,
        payload: user
    }),
    setIsLoading: (isLoading) => ({
        type: constantAuth.SET_IS_LOADING,
        payload: isLoading
    }),
    login: (username, password) => async (dispatch) => {
        try {
            dispatch(authActionCreators.setIsLoading(true));
            setTimeout(async () => {
                const response = await UserService.getUsers();
                const mockUser = response.data.find( user => user.username === username && user.password === password);
                if (mockUser) {
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', mockUser.username);
                    dispatch(authActionCreators.setUser(mockUser));
                    dispatch(authActionCreators.setIsAuth(true));
                } else {
                    dispatch(authActionCreators.setError('Uncorrect login or password!'))
                }
                dispatch(authActionCreators.setIsLoading(false));
            }, 1000);

        } catch(e) {
            dispatch(authActionCreators.setError('Login error'));
        }
    },
    logout: () => async (dispatch) => {
        localStorage.removeItem('auth');
        localStorage.removeItem('username');
        dispatch(authActionCreators.setUser({}));
        dispatch(authActionCreators.setIsAuth(false));
    }
}