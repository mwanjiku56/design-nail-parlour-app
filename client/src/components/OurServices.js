import React from "react";
import "./OurServices.css";

function OurServices() {
  return (
    <>
      <div className="contactus">
        <h1>Our Services</h1>
      </div>
      <div className="service-section">
        <div className="service-section1">
          <h2>Make it a special experience with NailPro</h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus.
            <br />
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et voluptates repudiandae sint et
            molestiae
          </p>
        </div>
        <div className="section1-image">
          <img
            src="https://img.freepik.com/free-vector/realistic-composition-colorful-fluorescent-nail-polishes-white-background_1284-17841.jpg?size=626&ext=jpg&ga=GA1.1.704823238.1693896145&semt=ais"
            alt=""
          />
        </div>
      </div>
      <div className="card-heading">
        <h2>What we Offer</h2>
      </div>
      <div className="service-card">
        <div className="cards">
          <img
            className="card-img-top"
            src="https://img.freepik.com/free-photo/high-angle-decoration-with-nail-polishes-white-background_23-2148299608.jpg?size=626&ext=jpg&ga=GA1.1.704823238.1693896145&semt=ais"
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">Gel Polish</h4>
            <p className="card-text ">
              Quality matters. NailPro gives the best that there can be. Trust
              is paramount to us and we assure you of everything safe .
            </p>
          </div>
        </div>

        <div className="cards">
          <img
            className="card-img-top"
            src="https://img.freepik.com/free-photo/closeup-photo-female-feet-with-beautiful-pedicure-after-spa-procedure-white-space_186202-4357.jpg?size=626&ext=jpg&uid=R97929084&ga=GA1.2.704823238.1693896145&semt=ais"
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">Pedicure</h4>
            <p className="card-text ">
              What you see is what you get. We ensure to give an inforgettable
              experience at aour parlour.
            </p>
          </div>
        </div>

        <div className="cards">
          <img
            className="card-img-top"
            src="https://img.freepik.com/free-photo/close-up-bag-with-girls-hands-with-manicure-it_132075-12280.jpg?size=626&ext=jpg&uid=R97929084&ga=GA1.2.704823238.1693896145&semt=ais"
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">Manicure</h4>
            <p className="card-text ">
              At NailPro we will take care of your girls' group. The experience
              will blow your mind. Welcome home.
            </p>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="card-heading">
        <h2>Best Nailpro Team</h2>
      </div>
      <div className="team">
        <div className="team1">
          <img
            alt=""
            src="https://img.freepik.com/free-photo/front-view-young-female-manicure-pink-t-shirt-black-cape-with-black-gloves-getting-prepared-her-job-blue_140725-24211.jpg?size=626&ext=jpg&uid=R97929084&ga=GA1.2.704823238.1693896145&semt=ais"
          />
          <img
            alt=""
            src="https://img.freepik.com/free-photo/beautiful-cheerful-manicure-master-is-looking-camera-while-working-client-s-nails_613910-21411.jpg?size=626&ext=jpg&uid=R97929084&ga=GA1.2.704823238.1693896145&semt=ais"
          />
          <img
            alt=""
            src="https://img.freepik.com/free-photo/front-view-man-getting-manicure_23-2150507013.jpg?size=626&ext=jpg&uid=R97929084&ga=GA1.2.704823238.1693896145&semt=ais"
          />
        </div>
      </div>
    </>
  );
}

export default OurServices;
