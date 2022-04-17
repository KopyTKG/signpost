import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "reactstrap";
import SVGloader from "../svg/loader.plugin";
import ComboBox from "./comboBox.";


function Linkbox(props){
    const [show, setShow] = React.useState(true);
    const [type, setType] = React.useState("");
    const handleSubmit = () => {
        let name = document.getElementById("name").value;
        let url = document.getElementById("url").value;
        props.handelNewSlot({type:type, name:name, url:url, show:show});
    }
    const handleUrl = () => {
        setShow(!show);
    };
     
    let active =  props.active;
    return (
        <>    
            <div className="row-full">
                <motion.div className="row text-center"
                    initial={{y: -250}}
                    animate={{y: 0}}
                >
                    <Col xl="1"/>
                    <Col xl="10" lg="12" md="12" sm="12" xs="12">
                    <a className="form-a" href={!props.disclick? props.url: null} target="_blank">
                        <form className='form-linkbox form-bg'>
                            <Row>
                            <Col xs="1" />
                            <Col xs="2">
                                <SVGloader type={props.type} />
                            </Col>
                            <Col className={!props.show? "text-center text-v-center": "text-center"}>
                                <Row>
                                    <Col>
                                        {props.name}
                                    </Col>
                                </Row>
                                {!props.show? 
                                null:
                                    <Row>
                                        <Col className="text-url">
                                            {props.url}
                                        </Col>
                                    </Row>
                                }
                            </Col>
                            <Col xs="3" />
                            </Row>
                        </form>
                        </a>
                    </Col>
                    <Col xl="1"/>
                </motion.div>
            </div> 
        </>
    );
}

export default Linkbox;
