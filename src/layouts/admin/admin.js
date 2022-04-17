import React, {useState} from "react";
import { Col, Container, Row } from "reactstrap";
import Linkbox from "components/plugins/linkbox/linkbox.plugin";
import input from "../../custom/links.info";
import info from "../../custom/profile.info"
import Profile from "components/plugins/profile/profile.plugin";
import Background from "components/theme/background";



function Admin(props) {
  const [loaded, setLoaded] = useState(false);
  const [slots, setSlots] = useState([]);
  const [profile, setProfile] = useState(
    {
      img: "", 
      user: "",
      description: "",
      background: "rgb(5,92,152)"  
    });
  const [limit, setLimit] = useState(false);
  const [density, setDensity] = useState(950);
  const Mount = () => {
      let vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      if(vw < 1000) 
      {   
          setDensity(100);
      }
      setLimit(true);
  }
  const handleOnload = () => {
    setSlots(input);
    setLoaded(true);
    setProfile(info)
  }
  const mainPanelRef = React.useRef(null);
  return (
        <React.Fragment>
            {loaded? null: handleOnload()}
            {!limit? Mount(): null}
            <div ref={mainPanelRef}>
              <Container>
                <Row>
                <Col xl="1" lg="1"/>
                <Col xl="10" lg="10" md="12">
                  <Profile
                  img={profile.img}
                  user={profile.user}
                  description={profile.description}
                  background={profile.background}              
                  />
                </Col>
                <Col xl="1" lg="1"/>
                </Row>
                <Row>
                  <Col xl="2" lg="2" />
                  <Col xl="8" lg="8" md="12">
                    {
                      slots.map((el) => {
                        return(
                          <Linkbox type={el.type} name={el.name} url={el.url} show={el.show} disclick={el.disclick}/>
                        )
                      })
                    }
                  </Col>
                  <Col xl="2" lg="2"/>
                </Row>
              </Container>
            </div>
            <Background density={density}/>
        </React.Fragment>
  );
}

export default Admin;
