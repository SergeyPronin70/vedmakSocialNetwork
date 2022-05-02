import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    render() {
        return (
            <>
                <div>
                    <span> {this.props.status} </span>
                </div>
                <div>
                    <input value={this.props.status} />
                </div>
            </>
        )
    }
}

export default ProfileStatus;