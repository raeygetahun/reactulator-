function Promo(props){
    const style={
        color:"blue"
    }
    return (<div className="promo-section">
        <div>
            <h1 style={style}>{props.heading}dont miss this chance</h1>
            <h1>{props.promoSubHeading}dfv</h1>
        </div>
    </div>);
}
export default Promo;