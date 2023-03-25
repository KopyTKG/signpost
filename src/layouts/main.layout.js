import {useState, useEffect, Suspense} from "react";
import { Col, Container, Row } from "reactstrap";
import Profile from "../components/profile.component"
import Linkbox from "../components/linkbox.component";
import Background from "../components/theme/background";

const Admin = () => {
  const [density, setDensity] = useState(100);
  /* Fetch load */
  const [links, setLinks] = useState([])
  const [profile, setProfile] = useState({

  });

  useEffect(() => {
    

    fetch("https://raw.githubusercontent.com/KopyTKG/signpost/Store/links.json")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setLinks(data.links)
    })
  
    fetch("https://raw.githubusercontent.com/KopyTKG/signpost/Store/profile.json")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setProfile(data)
    })
  }, [])
  return (
    <>
        <div>
          <Container>
            <Row>
            <Col xl="1" lg="1"/>
            <Col xl="10" lg="10" md="12">
              <Suspense fallback={<>
                  <Profile
                    img={"#"}
                    user={""}
                    description={""}
                    background={"#000000"}              
                  />
              </>}>
                <Profile
                  img={profile.img}
                  user={profile.user}
                  description={profile.description}
                  background={profile.background}              
                />
              </Suspense>
            </Col>
            <Col xl="1" lg="1"/>
            </Row>
            <Row>
              <Col xl="2" lg="2" />
              <Col xl="8" lg="8" md="12">
                <Suspense fallback={<></>}>
                  {
                    links.map((el) => {
                      return(
                        <Linkbox type={el.icon} name={el.name} url={el.url} show={el.show} disclick={el.disclick}/>
                        )
                      })
                    }
                </Suspense>
              </Col>
              <Col xl="2" lg="2"/>
            </Row>
          </Container>
        </div>
        <Background density={density}/>
    </>
  );
}

export default Admin;
