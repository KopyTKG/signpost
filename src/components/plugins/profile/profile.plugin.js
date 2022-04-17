import { motion } from "framer-motion";
import { Col, Row } from "reactstrap";

function Profile(props){

    return (
        <>
        <motion.div className=" row profile text-center"
        initial={{y: -250}}
        animate={{y: 0}}
        >
            <Col xl="1" lg="1"/>
            <Col xl="10" lg="1" md="12">
                <Row className="form-linkbox">
                    <Col xs="5"><img src={props.img} className="profile-img"
                    style={{background: props.background}}
                    alt="profile pic"
                    /></Col>
                    <Col>
                        <Row>
                            <Col className="profile-user">
                                {props.user}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="profile-description">
                                {props.description}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </motion.div>
        </>
    );
}

export default Profile;