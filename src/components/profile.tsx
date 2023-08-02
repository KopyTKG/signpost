export default function Profile(props: any) {
    return(
        <>
        <div className="profile darkwhite-color">
            <img src={props.src} alt="Profile picture selected by the owner" />
        </div>
        <div className="name darkwhite-color">
            {props.children}
            <div className={(props.checked? "display": "hidden")}>
                <div className="checkmark" />
            </div>
        </div>
        </>
    )
}