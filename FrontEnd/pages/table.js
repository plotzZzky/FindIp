export default function Table(props) {

    return(
        <div className="table-div" id="Table">
            <div className="tabel-subdiv">
                <p> Ip: {props.ip} </p>
                <p> cidade: {props.city} </p>
            </div>

            <div className="tabel-subdiv">
                <p> Pais: {props.country}</p>
                <p> Isp: {props.isp} </p>
            </div>
        </div>
    );
}