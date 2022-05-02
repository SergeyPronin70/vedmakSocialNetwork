import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile) {
     return <Preloader />
   }

  return (
    <div>
      {/* <div>
        <img src='https://i.playground.ru/p/e1AkUDiU_lGDIjAWjc9tMw.jpeg' />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatus status={'Upyri'} />
      </div>
    </div>
  )
}

export default ProfileInfo;