import SVGloader from "../middleware/loader.component";

function Linkbox(props){     
    return (   
        <div className="row-full">
            <a className="form-a" href={!props.disclick? props.url: null} target="_blank" rel="noreferrer">
                <form className='form-linkbox form-bg'>
                    <SVGloader type={props.type} />
                    {props.name}
                    {props.url}
                </form>
            </a>
        </div> 
    );
}

export default Linkbox;
