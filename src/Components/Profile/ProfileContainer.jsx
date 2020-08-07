import React from 'react';
import './Profile.css';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from './../Hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }
    render() {
        return (
            < Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (props) => ({
    profile: props.profilePage.profile,
})

export default compose(connect(mapStateToProps, { getUserProfile }), withRouter, WithAuthRedirect)(ProfileContainer)