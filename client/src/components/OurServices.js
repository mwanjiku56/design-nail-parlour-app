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

      <div className="card-container">
        <h1>Prices</h1>
        <h3>Manicure</h3>

        {/* <img
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz5vqf9h0kIwRdOACZCqU6LsA5amlG3SnqOw&usqp=CAU"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mOO_NwWaFKhPdU6JxjDmG-YZebOdKod9Mg&usqp=CAU"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNSy-CeX-H-rN76a5ehzwckTSMZTNoyivuxg&usqp=CAU"
            alt=""
          /> */}
        <div className="cards">
          <img
            className="card-img-top"
            src="https://img.freepik.com/free-photo/young-girl-scientist-making-slime_23-2148817395.jpg?size=626&ext=jpg&uid=R97929084&ga=GA1.2.704823238.1693896145&semt=ais"
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">
              Kids Gel Polish Price Range: $50-$100
            </h4>
            <p className="card-text ">
              Come one come all. We cater for both kids pedicure and manicure
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
              Performing online registrations and check ins of events. Clients
              are able to decide on which event they want to attend and make
              thier bookings before the events' deadline{" "}
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
              Performing online registrations and check ins of events. Clients
              are able to decide on which event they want to attend and make
              thier bookings before the events' deadline{" "}
            </p>
          </div>
        </div>
      </div>

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
