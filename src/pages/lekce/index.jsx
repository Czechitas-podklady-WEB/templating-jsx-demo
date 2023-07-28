import {Header} from "../../components/Header.jsx";
import {apiBaseURL} from "../../lib.js";

const render = async () => {
    const resp = await fetch(`${apiBaseURL}/lekce`);
    const seznamLekci = await resp.json();

    const Page = () => {

        return (
            <>
                <Header/>

                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Název lekce</th>
                        <th scope="col">Datum</th>
                        <th scope="col">Čas</th>
                        <th scope="col">Místo</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        seznamLekci.map((lekce, index) => (
                            <tr>
                                <td>{index + 1}.</td>
                                <td>{lekce.nazev}</td>
                                <td>{lekce.datum}</td>
                                <td>{lekce.cas}</td>
                                <td>{lekce.misto}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </>
        )
    }

    document.querySelector(".container").appendChild(<Page/>)
}

render()