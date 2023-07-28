import {Header} from "../components/Header.jsx";

const HomePage = () => {
    return (
        <>
            <Header/>

            <div class="px-4 py-5 my-5 text-center">
                <img class="d-block mx-auto mb-4" src="/images/logo.svg" alt="" width="160"/>
                <h1 class="display-5 fw-bold">Pohádková škola JavaScriptu</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">
                        Jak víte ze seriálu Arabela, i pohádkové postavy musí jít s dobou. Proto jsme se rozhodli
                        otevřít školu programování i pro ně. Učit se budeme, jak jinak, JavaScriptu.
                    </p>
                </div>
            </div>
        </>
    )
}

document.querySelector(".container").appendChild(<HomePage/>)