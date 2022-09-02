import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { CreateField, GetStringKeys, Input, Textarea } from '../../common/FormsControls/FormsControls';
import s from './ProfileInfo.module.css';
import style from '../../common/FormsControls/FormsControls.module.css'
import { ProfileType } from 'src/types/types';

type PropsType = {
profile: ProfileType
}
type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={ handleSubmit }>
      <div><button>Save</button></div>
      { error && <div className={ style.formSummaryError }>
                {error}
            </div>}
    <div>
      <b>Full name</b>:
      { CreateField<ProfileTypeKeys>("Full name", "fullName", Input, [] ) }
    </div>
    <div>
      <b>Looking for a job</b>: 
      { CreateField<ProfileTypeKeys>("", "lookingForAJob", Input, [], {type: "checkbox"} ) }
    </div>
    
      <div>
        <b>My professional skills</b>: 
        { CreateField<ProfileTypeKeys>("My professional skills", "lookingForAJobDescription", Textarea, [] ) }
      </div>
    <div>
      <b>About me</b>:
      { CreateField<ProfileTypeKeys>("About me", "aboutMe", Textarea, [] ) }
    </div>
    <div>
      <b>Contacts</b> {Object.keys(profile.contacts).map(key => {
        return <div key={key} className={s.contact}>
          <b>{key}: { CreateField(key, "contacts." + key, Input, [] ) }</b>
        </div>
      })}
    </div>
    </form>
  }

  const ProfileDataFormRedux = reduxForm<ProfileType, PropsType>({
    //уникальное имя для формы
    form: 'edit-profile'
})(ProfileDataForm)

  export default ProfileDataFormRedux;