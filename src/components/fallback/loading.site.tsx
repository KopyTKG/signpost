function SiteLoading() {
    return(
        <div className="screen-center flex-column gap-5">
            <div className="lg-text darkblue-color bold-text">
                Please wait. Site is currently loading.
            </div>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default SiteLoading;