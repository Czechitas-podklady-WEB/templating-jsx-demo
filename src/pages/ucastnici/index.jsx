import {Header} from "../../components/Header.jsx";
import {apiBaseURL} from "../../lib.js";

const Zena = () => <i class="las la-venus" style="color: red"></i>;
const Muz = () => <i class="las la-mars" style="color: blue"></i>;
const genders = {
    F: <Zena/>,
    M: <Muz/>,
};

const Ucastnici = ({ucastnici}) => {
    const handleClickDelete = async (event, id) => {
        event.preventDefault()

        const resp = await fetch(`${apiBaseURL}/ucastnici/${id}`, {
            method: "DELETE"
        });

        if (resp.ok) {
            location.reload()
        } else {
            alert("Aj, karamba! Nepodařilo se odeslat data na server.")
        }
    };

    return (
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col"></th>
                <th scope="col">Jméno</th>
                <th scope="col">Příjmení</th>
                <th scope="col">Bydliště</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {ucastnici.map((ucastnik, index) => (
                <tr>
                    <td>{index + 1}.</td>
                    <td>{genders[ucastnik.gender]}</td>
                    <td>{ucastnik.jmeno}</td>
                    <td>{ucastnik.prijmeni}</td>
                    <td>{ucastnik.bydliste || <em>neuvedeno</em>}</td>
                    <td>
                        <a href={`/ucastnici/detail.html?id=${ucastnik.id}`} class="btn btn-primary mx-2">
                            Detail
                        </a>
                        <a href={`/ucastnici/edit.html?id=${ucastnik.id}`} class="btn btn-secondary mx-2">
                            Upravit
                        </a>
                        <button class="btn btn-danger mx-2"
                                onClick={(event) => handleClickDelete(event, ucastnik.id)}>Smazat
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

const PridaniUcastnika = () => {
    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
            jmeno: event.target[0].value,
            prijmeni: event.target[1].value,
            bydliste: event.target[2].value,
            gender: event.target[3].value,
            profilovyObrazek: event.target[4].value,
        }

        const resp = await fetch(`${apiBaseURL}/ucastnici`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (resp.ok) {
            location.reload()
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
                            <input type="text" class="form-control" id="jmeno" required/>
                        </div>
                        <div class="mb-3">
                            <label for="prijmeni" class="form-label">
                                Příjmení
                            </label>
                            <input type="text" class="form-control" id="prijmeni" required/>
                        </div>
                        <div class="mb-3">
                            <label for="bydliste" class="form-label">
                                Bydliště
                            </label>
                            <input type="text" class="form-control" id="bydliste"/>
                        </div>
                        <div class="mb-3">
                            <label for="gender" class="form-label">
                                Gender
                            </label>
                            <select class="form-select" id="gender">
                                <option value="F">Žena</option>
                                <option value="M">Muž</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="profilovyPbrazek" class="form-label">
                                Profilový obrázek
                            </label>
                            <input type="url" class="form-control" id="profilovyPbrazek"/>
                        </div>
                        <button type="submit" class="btn btn-primary">
                            Přidat
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}


const resp = await fetch(`${apiBaseURL}/ucastnici`)
const ucastnici = await resp.json()

const Page = () => {

    return (
        <>
            <Header/>

            {
                ucastnici.length === 0 ?
                    <div class="fst-italic">Seznam účastníků je prázdný.</div> :
                    <Ucastnici ucastnici={ucastnici}/>
            }

            <PridaniUcastnika/>
        </>
    )
}

document.querySelector(".container").appendChild(<Page/>)
