import {Header} from "../../components/Header.jsx";
import {apiBaseURL} from "../../lib.js";

const Zena = () => <i class="las la-venus" style="color: red"></i>;
const Muz = () => <i class="las la-mars" style="color: blue"></i>;
const genders = {
    F: <Zena/>,
    M: <Muz/>,
};


const Ucastnici = ({ucastnici}) => {
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
                        <a href={`/ucastnici/detail.html?id=${ucastnik.id}`} class="btn btn-primary">
                            Detail
                        </a>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

const resp = await fetch(`${apiBaseURL}/ucastnici`);
const ucastnici = await resp.json();

const Page = () => {

    return (
        <>
            <Header/>

            {
                ucastnici.length === 0 ?
                    <div class="fst-italic">Seznam účastníků je prázdný.</div> :
                    <Ucastnici ucastnici={ucastnici}/>
            }
        </>
    )
}

document.querySelector(".container").appendChild(<Page/>)
