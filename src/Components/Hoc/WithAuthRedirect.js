import React from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (props) => ({
    isAuth: props.auth.isAuth
})  
export const WithAuthRedirect = (Component) => {
    class Redirectcomponent extends React.Component {
        render(){
            if (!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(Redirectcomponent)
    return ConnectedAuthRedirectComponent;
}