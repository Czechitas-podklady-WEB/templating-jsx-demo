import {Header} from "../../components/Header.jsx";
import {apiBaseURL} from "../../lib.js";

const UcastnikEdit = ({id, jmeno, prijmeni, bydliste, gender, profilovyObrazek}) => {
    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
            jmeno: event.target[0].value,
            prijmeni: event.target[1].value,
            bydliste: event.target[2].value,
            gender: event.target[3].value,
            profilovyObrazek: event.target[4].value,
        }

        const resp = await fetch(`${apiBaseURL}/ucastnici/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (resp.ok) {
            location = "/ucastnici"
        } else {
            alert("Aj, karamba! Nepodařilo se odeslat data na server.")
        }
    };

    return (
        <div class="container">
            <div class="row">
                <div class="col-md-4 offset-md-4">
                    <h2>Přidat účastníka</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="jmeno" class="form-label">
                                Jméno
                            </label>
                            <input type="text" class="form-control" id="jmeno" value={jmeno} required/>
                        </div>
                        <div class="mb-3">
                            <label for="prijmeni" class="form-label">
                                Příjmení
                            </label>
                            <input type="text" class="form-control" id="prijmeni" value={prijmeni} required/>
                        </div>
                        <div class="mb-3">
                            <label for="bydliste" class="form-label">
                                Bydliště
                            </label>
                            <input type="text" class="form-control" id="bydliste" value={bydliste}/>
                        </div>
                        <div class="mb-3">
                            <label for="gender" class="form-label">
                                Gender
                            </label>
                            <select class="form-select" id="gender">
                                <option value="F" selected={gender === "F"}>Žena</option>
                                <option value="M" selected={gender === "M"}>Muž</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="profilovyObrazek" class="form-label">
                                Profilový obrázek
                            </label>
                            <input type="url" class="form-control" id="profilovyObrazek" value={profilovyObrazek}/>
                        </div>
                        <div class="d-flex justify-content-between">
                            <button type="submit" class="btn btn-primary">
                                Upravit
                            </button>
                            <a href="/ucastnici" class="btn btn-secondary">Zpět</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const id = new URLSearchParams(window.location.search).get("id");
const resp = await fetch(`${apiBaseURL}/ucastnici/${id}`);
const {jmeno, prijmeni, bydliste, gender, profilovyObrazek} = await resp.json();

const Page = () => {

    return (
        <>
            <Header/>

            <UcastnikEdit id={id} jmeno={jmeno} prijmeni={prijmeni} bydliste={bydliste} gender={gender}
                          profilovyObrazek={profilovyObrazek}/>
        </>
    )
}

document.querySelector(".container").appendChild(<Page/>)
