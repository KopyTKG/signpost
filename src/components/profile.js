function Profile(props){

    return (
        <>
            <div className="profile-img">
                <img src={props.img} className="profile-img"
                style={{background: props.background}}
                alt="profile pic"
                />
            </div>
            {props.user}
            {props.description}
        </>
    );
}

export default Profile;