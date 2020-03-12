import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from "../../redux/profileReducer";
import Profile from './Profile';
import Axios from 'axios'
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2;
        }

        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

const mapDispatchToProps = {
    setUserProfile
}

// оборачиваем нашу компоненту компонентой высшего порядка withRouter и уже новую отправляем в connect
let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent)