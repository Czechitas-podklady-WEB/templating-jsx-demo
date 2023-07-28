import {Header} from "../../components/Header.jsx";
import {apiBaseURL} from "../../lib.js";

export const LektorDetail = ({jmeno, prijmeni, role, profilovyObrazek}) => {
    return (
        <div class="card" style="width: 18rem;">
            {profilovyObrazek && <img src={profilovyObrazek} class="card-img-top" alt="profilová fotka"/>}
            <div class="card-body">
                <h5 class="card-title">{jmeno + " " + prijmeni}</h5>
                <p class="card-text">Role: {role}</p>
            </div>
        </div>
    )
}

const id = new URLSearchParams(window.location.search).get("id");
const resp = await fetch(`${apiBaseURL}/lektori/${id}`);
const {jmeno, prijmeni, role, profilovyObrazek} = await resp.json();

const Page = () => {

    return (
        <>
            <Header/>

            <LektorDetail jmeno={jmeno} prijmeni={prijmeni} role={role} profilovyObrazek={profilovyObrazek}/>
        </>
    )
}

document.querySelector(".container").appendChild(<Page/>)
