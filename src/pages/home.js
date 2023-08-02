import {useState, Suspense} from "react";
import ProfileLoading from "../components/backup/loading.profile";
import LinksLoading from "../components/backup/loading,links";


const Admin = () => {
  const [links, setLinks] = useState([])
  const [profile, setProfile] = useState({});

  return (
    <div className="flex flex-column center gap-2">
      <Suspense fallback={<ProfileLoading />}>
        <ProfileLoading />
      </Suspense>
      <Suspense fallback={<LinksLoading />}>
        <LinksLoading />
      </Suspense>
    </div>
  );
}

export default Admin;
