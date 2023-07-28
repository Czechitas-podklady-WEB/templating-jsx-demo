import {Header} from "../../components/Header.jsx";
import {apiBaseURL} from "../../lib.js";

const Lektori = ({lektori}) => {
    return (
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Jméno a příjmení</th>
                <th scope="col">Role</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {lektori.map((lektor, index) => (
                <tr>
                    <td>{index + 1}.</td>
                    <td>{lektor.jmeno + " " + lektor.prijmeni}</td>
                    <td>
                        <i class="las la-bell"></i> {lektor.role}
                    </td>
                    <td>
                        <a href={`/lektori/detail.html?id=${lektor.id}`} class="btn btn-primary">
                            Detail
                        </a>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

const resp = await fetch(`${apiBaseURL}/lektori`);
const lektori = await resp.json();

const Page = () => {

    return (
        <>
            <Header/>

            {
                lektori.length === 0 ?
                    <div class="fst-italic">Seznam lektorů je prázdný.</div> :
                    <Lektori lektori={lektori}/>
            }
        </>
    )
}

document.querySelector(".container").appendChild(<Page/>)
