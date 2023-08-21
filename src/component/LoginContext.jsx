import React, { Component } from 'react'

// Context tanımlamak
export const LoginAuthenticationContext = React.createContext();

// CLASS
class LoginContext extends Component {

    // Component görünür adı
    static displayName = "Login_Context";

    // State
    state = {
        isLogin: false,//Giriş yapılmış mı?
    }

    // Login 
    isLogin = (authenticationState) => {
        this.setState({
            //..authenticationState,
            isLogin: true,
        })
    }

    // Logout 
    logout = () => {
        this.setState({
            isLogin: false,
        })
    }

    render() {
        return (
            <LoginAuthenticationContext.Provider value={{
                state: { ...this.state },
                isLogin: this.isLogin,
                logout: this.logout
            }}>
                {this.props.children}
            </LoginAuthenticationContext.Provider>
        )
    }
}
export default LoginContext
