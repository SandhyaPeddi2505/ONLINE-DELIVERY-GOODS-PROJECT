import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Other.scss";

const Next = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="other">
        <div className="row">
          <div className="col-md-6">
        {/* <h3 class="title4">Other Cities</h3>
        <a href="/cityselection"  className="sow" onClick={(Amaravathi) => {}}>
          Amaravathi
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(ArunachalPradesh) => {}}>
          Arunachal Pradesh
        </a>
        <br />
        <a href="/cityselection" className="sow" onClick={(AndhraPradesh) => {}}>
          AndhraPradesh
        </a>
        <br />
        <a href="/cityselection" className="sow" onClick={(Assam) => {}}>
          Assam
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Bihar) => {}}>
          Bihar
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Chandigarh) => {}}>
          Chandigarh
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Chattisgarh) => {}}>
          Chattisgarh
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(DadraNgrHaveli) => {}}>
          DadraNgrHaveli
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Delhi) => {}}>
          Delhi
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Goa) => {}}>
          Goa
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Gujarat) => {}}>
          Gujarat
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Gangtok) => {}}>
          Gangtok
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Haryana) => {}}>
          Haryana
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(HimachalPradesh) => {}}>
          HimachalPradesh
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(JammuKashmir) => {}}>
          JammuKashmir
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Jharkhand) => {}}>
          Jharkhand
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Karnataka) => {}}>
          Karnataka
        </a>
        <br />
        </div>
        <div className="col-md-6" id="sandhya" >
        <a href="/cityselection"  className="sow" onClick={(Kerala) => {}}>
          Kerala
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Ladakh) => {}}>
          Ladakh
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(MadhyaPradesh) => {}}>
          MadhyaPradesh
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Maharasthtra) => {}}>
          Maharastra
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Manipur) => {}}>
          Manipur
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Meghalaya) => {}}>
          Meghalaya
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Mizoram) => {}}>
          Mizoram
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Nagaland) => {}}>
          Nagaland
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Odisha) => {}}>
          Odisha
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Puducherry) => {}}>
          Puducherry
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Punjab) => {}}>
          Punjab
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Rajasthan) => {}}>
          Rajasthan
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Sikkim) => {}}>
          Sikkim
        </a>
        <br />
        <a href="/cityselection"   className="sow" onClick={(TamilNadu) => {}}>
          TamilNadu
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(UttarPradesh) => {}}>
          UttarPradesh
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(Uttarkhand) => {}}>
          Uttarkhand
        </a>
        <br />
        <a href="/cityselection"  className="sow" onClick={(WestBengal) => {}}>
          WestBengal
        </a>
        <br /> */}
        </div>
        </div>
      </div>
      <div class="net">
        {/* <Link to="/cityselection">
          <button name="next" className="btn btn-primary">
            Next
          </button>
        </Link> */}
       
      </div>
    </>
  );
};
export default Next;
