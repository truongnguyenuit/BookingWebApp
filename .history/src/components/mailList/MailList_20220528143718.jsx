
import "./mailList.css"
const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDisc">Sign up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
            <input className=""type="text" placeholder="Your Email" />
            <button className="btnSubscribe">Subsribe</button>
        </div>
    </div>
  )
}
export default MailList;
