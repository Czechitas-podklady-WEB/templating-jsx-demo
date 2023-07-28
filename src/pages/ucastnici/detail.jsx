import {Header} from "../../components/Header.jsx";
import {apiBaseURL} from "../../lib.js";

const UcastnikDetail = ({jmeno, prijmeni, bydliste, profilovyObrazek}) => {
    return (
        <div class="card" style="width: 18rem;">
            {profilovyObrazek && <img src={profilovyObrazek} class="card-img-top" alt="profilová fotka"/>}
            <div class="card-body">
                <h5 class="card-title">{jmeno + " " + prijmeni}</h5>
                <p class="card-text">Bydliště: {bydliste || <em>neuvedeno</em>}</p>
            </div>
        </div>
        );
}

const id = new URLSearchParams(window.location.search).get("id");
const resp = await fetch(`${apiBaseURL}/ucastnici/${id}`);
const {jmeno, prijmeni, bydliste, profilovyObrazek} = await resp.json();

const Page = () => {

    return (
        <>
        <Header/>

        <UcastnikDetail jmeno={jmeno} prijmeni={prijmeni} bydliste={bydliste}
            profilovyObrazek={profilovyObrazek}/>
        </>
        )
}

document.querySelector(".container").appendChild(<Page/>)