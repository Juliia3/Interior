import "./clients.scss";

import clientsBg from "../../assets/images/clients-bg.png";
import ClientsCard from "./ClientsCard/ClientsCard";

import client1 from "../../assets/images/client1.png";
import client2 from "../../assets/images/client2.png";
import client3 from "../../assets/images/client3.png";
import client4 from "../../assets/images/client4.png";

function Clients() {
  return (
    <div className="clients">
      <img className="clients__bg" src={clientsBg} />
      <div className="clients__container container">
        <h3 className="clients__subtitle">WHAT PEOPLE SAY</h3>
        <h2 className="clients__title">Words Of Our Clients</h2>
        <div className="clients__cards">
          <div className="clients__card-box">
            <ClientsCard
              img={client1}
              name="Bessie Cooper"
              title="Communications Director"
              text="I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi"
            />
          </div>

          <div className="clients__card-box">
            <ClientsCard
              img={client2}
              name="Angelina Jolie"
              title="Sales Manager"
              text="I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi"
            />
          </div>

          <div className="clients__card-box">
            <ClientsCard
              img={client3}
              name="Brooklyn Simmons"
              title="Public Relations Specialist"
              text="I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi"
            />
          </div>

          <div className="clients__card-box">
            <ClientsCard
              img={client4}
              name="Bessie Cooper"
              title="Communications Director"
              text="I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
