function ZipCode(props){
        return (<div>
            <p>Enter zipcode</p>
            <input placeholder="eg. 32608"/>
            <button onClick={props.onEnter}>
                Enter
            </button>
        </div>);
}

export default ZipCode;