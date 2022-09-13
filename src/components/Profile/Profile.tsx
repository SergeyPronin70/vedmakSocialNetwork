import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from 'src/types/types';

type PropsType = {
profile: ProfileType | null
savePhoto: (file: File) => void
isOwner: boolean
status: string
saveProfile: (profile: ProfileType) => Promise<any>
updateStatus: (status: string) => void
}
const Profile: React.FC<PropsType> = (props) => {


  return (<>
    <ProfileInfo
      savePhoto={props.savePhoto}
      profile={props.profile}
      isOwner={props.isOwner}
      status={props.status}
      updateStatus={props.updateStatus}
      saveProfile={props.saveProfile} />
    <MyPostsContainer 
    //@ts-ignore
    profile={props.profile} />
  </>)

}

export default Profile;