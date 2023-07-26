const Muz = () => <i class="las la-mars" style="color: blue"></i>;
const Zena = () => <i class="las la-venus" style="color: red"></i>;
const genders = {
  muž: <Muz />,
  žena: <Zena />,
};

export const UcastniciTabulka = ({ ucastnici }) => {
  return (
    <>
      {ucastnici.map((ucastnik, index) => (
        <tr>
          <td>{index + 1}.</td>
          <td>{genders[ucastnik.gender]}</td>
          <td>{ucastnik.jmeno}</td>
          <td>{ucastnik.prijmeni}</td>
          <td>{ucastnik.bydliste || <em>neuvedeno</em>}</td>
          <td>
            <a
              href={`/ucastnici/detail.html?id=${index}`}
              class="btn btn-primary"
            >
              Detail
            </a>
          </td>
        </tr>
      ))}
    </>
  );
};

export const UcastnikDetail = ({
  jmeno,
  prijmeni,
  bydliste,
  gender,
  profilovyObrazek,
}) => {
  return (
    <div class="card" style="width: 18rem;">
      {profilovyObrazek && (
        <img
          src={profilovyObrazek}
          class="card-img-top"
          alt="profilová fotka"
        />
      )}
      <div class="card-body">
        <h5 class="card-title">{jmeno + " " + prijmeni}</h5>
        <p class="card-text">Bydliště: {bydliste || <em>neuvedeno</em>}</p>
      </div>
    </div>
  );
};

export const Formular = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      jmeno: event.target[0],
      prijmeni: event.target[1],
      bydliste: event.target[2],
    }
    //TODO
    console.log("Odeslání dat:", data)
    setTimeout(() => location.reload(), 2000)
  };

  return (
    <>
      <h2>Přidat účastníka</h2>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="jmeno" class="form-label">
            Jméno
          </label>
          <input type="text" class="form-control" id="jmeno" required />
        </div>
        <div class="mb-3">
          <label for="prijmeni" class="form-label">
            Příjmení
          </label>
          <input type="text" class="form-control" id="prijmeni"  required />
        </div>
        <div class="mb-3">
          <label for="bydliste" class="form-label">
            Bydliště
          </label>
          <input type="text" class="form-control" id="bydliste" />
        </div>
        <button type="submit" class="btn btn-primary">
          Přidat
        </button>
      </form>
    </>
  );
};
