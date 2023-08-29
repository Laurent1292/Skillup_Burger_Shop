import React from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Détails de la livraison</h1>
        <form>
          <div>
            <label>Adresse</label>
            <input type="text" placeholder="Entrer votre adresse" />
          </div>
          <div>
            <label>Ville</label>
            <input type="text" placeholder="Entrer votre ville" />
          </div>
          <div>
            <label>Pays</label>
            <select>
              <option value="">Pays</option>
                {Country && Country.getAllCountries().map((i) => ( <option value="{i.isoCode}" key="{i.isoCode}">
                {i.name}    
              </option>
                ))} 
            </select>
          </div>
          <div>
          <label>État/Région</label>
            <select>
            <option value="">État/Région</option>
              {State && State.getStatesOfCountry("FR").map((i) => ( <option value="{i.isoCode}" key="{i.isoCode}">
              {i.name}
            </option>
            ))}
            </select>
          </div>
          <div>
            <label>Code postal</label>
            <input type="number" placeholder="Entrer votre code postal" />
          </div>
          <div>
            <label>N° de téléphone</label>
            <input type="number" placeholder="Entrer votre n° de téléphone" />
          </div>
          <Popup trigger={
            <Link className="link" to="/myorders">
              Confirmer la commande
            </Link>
            }
                position="right center">
                <div style={{color:"red",position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Votre commande est en cours de traitement !</div>
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
