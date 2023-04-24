import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Other.scss";

const Next = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="other">
        <h2>Other Cities</h2>
        <a href="/primary1" onClick={(Amaravathi) => {}}>
          Amaravathi
        </a>
        <br />
        <a href="/primary1" onClick={(ArunachalPradesh) => {}}>
          Arunachal Pradesh
        </a>
        <br />
        <a href="/primary1" onClick={(AndhraPradesh) => {}}>
          AndhraPradesh
        </a>
        <br />
        <a href="/primary1" onClick={(Assam) => {}}>
          Assam
        </a>
        <br />
        <a href="/primary1" onClick={(Bihar) => {}}>
          Bihar
        </a>
        <br />
        <a href="/primary1" onClick={(Chandigarh) => {}}>
          Chandigarh
        </a>
        <br />
        <a href="/primary1" onClick={(Chattisgarh) => {}}>
          Chattisgarh
        </a>
        <br />
        <a href="/primary1" onClick={(DadraNgrHaveli) => {}}>
          DadraNgrHaveli
        </a>
        <br />
        <a href="/primary1" onClick={(Delhi) => {}}>
          Delhi
        </a>
        <br />
        <a href="/primary1" onClick={(Goa) => {}}>
          Goa
        </a>
        <br />
        <a href="/primary1" onClick={(Gujarat) => {}}>
          Gujarat
        </a>
        <br />
        <a href="/primary1" onClick={(Gangtok) => {}}>
          Gangtok
        </a>
        <br />
        <a href="/primary1" onClick={(Haryana) => {}}>
          Haryana
        </a>
        <br />
        <a href="/primary1" onClick={(HimachalPradesh) => {}}>
          HimachalPradesh
        </a>
        <br />
        <a href="/primary1" onClick={(JammuKashmir) => {}}>
          JammuKashmir
        </a>
        <br />
        <a href="/primary1" onClick={(Jharkhand) => {}}>
          Jharkhand
        </a>
        <br />
        <a href="/primary1" onClick={(Karnataka) => {}}>
          Karnataka
        </a>
        <br />
        <a href="/primary1" onClick={(Kerala) => {}}>
          Kerala
        </a>
        <br />
        <a href="/primary1" onClick={(Ladakh) => {}}>
          Ladakh
        </a>
        <br />
        <a href="/primary1" onClick={(MadhyaPradesh) => {}}>
          MadhyaPradesh
        </a>
        <br />
        <a href="/primary1" onClick={(Maharasthtra) => {}}>
          Maharastra
        </a>
        <br />
        <a href="/primary1" onClick={(Manipur) => {}}>
          Manipur
        </a>
        <br />
        <a href="/primary1" onClick={(Meghalaya) => {}}>
          Meghalaya
        </a>
        <br />
        <a href="/primary1" onClick={(Mizoram) => {}}>
          Mizoram
        </a>
        <br />
        <a href="#" onClick={(Nagaland) => {}}>
          Nagaland
        </a>
        <br />
        <a href="/primary1" onClick={(Odisha) => {}}>
          Odisha
        </a>
        <br />
        <a href="/primary1" onClick={(Puducherry) => {}}>
          Puducherry
        </a>
        <br />
        <a href="/primary1" onClick={(Punjab) => {}}>
          Punjab
        </a>
        <br />
        <a href="/primary1" onClick={(Rajasthan) => {}}>
          Rajasthan
        </a>
        <br />
        <a href="/primary1" onClick={(Sikkim) => {}}>
          Sikkim
        </a>
        <br />
        <a href="/primary1" onClick={(TamilNadu) => {}}>
          TamilNadu
        </a>
        <br />
        <a href="/primary1" onClick={(UttarPradesh) => {}}>
          UttarPradesh
        </a>
        <br />
        <a href="/primary1" onClick={(Uttarkhand) => {}}>
          Uttarkhand
        </a>
        <br />
        <a href="/primary1" onClick={(WestBengal) => {}}>
          WestBengal
        </a>
        <br />
      </div>
      <div>
        <Link to="/primary1">
          <button name="next" className="btn btn-primary">
            Next
          </button>
        </Link>
      </div>
    </>
  );
};
export default Next;
