import {useState, Suspense} from "react";
import Profile from "../components/profile"
import Linkbox from "../components/linkbox";
import ProfileLoading from "../components/backup/loading.profile";


const Admin = () => {
  const [links, setLinks] = useState([])
  const [profile, setProfile] = useState({});

  return (
    <div className="flex flex-column center gap-2">
      <Suspense fallback={<ProfileLoading />}>
        <ProfileLoading />
      </Suspense>
    </div>
  );
}

export default Admin;
