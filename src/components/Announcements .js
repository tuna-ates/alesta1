import "../styles/Announcements .css";
import image2 from "../icons/image2.jpg"
import image3 from "../icons/image3.jpg"
import image4 from "../icons/image4.jpg"
const Announcements = () => {
    return (
        <section id="announcements">
        <div className="announcements_general_container">
            <div className="announcements_head">
                <p>Announcements and Updates</p>
            </div>
            <div className="announcements_container">
                <div className="col">
                    <img className="image" src={image2} />
                    <p className="col_head">Lukas Saginaw named board director</p>
                    <p className="col_prg">
                        Company newsletters are essential in building relationships with
                        your employees, customers, or even prospective clients.
                    </p>
                    <button className="readMore">READ MORE</button>
                </div>
                <div className="col">
                    <div>
                        <img className="image" src={image4} />
                    </div>


                    <p className="col_head">Creating a culture of innovation</p>
                    <p className="col_prg">
                        Company newsletters are essential in building relationships with
                        your employees, customers, or even prospective clients.
                    </p>


                    <button className="readMore">READ MORE</button>
                </div>
                <div className="col">
                    <img className="image" src={image3} />
                    <p className="col_head">A Year in Review:Our Wins and Milestones</p>
                    <p className="col_prg">
                        Company newsletters are essential in building relationships with
                        your employees, customers, or even prospective clients.
                    </p>
                    <button className="readMore">READ MORE</button>
                </div>
            </div>
        </div>
        </section>
    );
};
export default Announcements;
