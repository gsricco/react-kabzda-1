import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';


const Profile = () => {

    return <div className={s.content}>
                <div>
                    <img className={s.backgrHeader} src="https://media-exp1.licdn.com/dms/image/C561BAQH3TM7unc6Pig/company-background_10000/0/1551816139295?e=2147483647&v=beta&t=IhY_m8xs9ij-Oz8RKT1x-zY1RJ6d27TLvdoMVzit9Dc" alt=""/>
                </div>
                <div>
                    <img className={s.avatar} src="https://oops.ru/wp-content/uploads/2021/02/dzheyms-kemeron-vypustit-komiksy-po-motivam-avatara.jpg" alt=""/> Avatar<br/>
                    Description
                </div>
                <MyPosts/>
            </div>;
}


export default Profile;