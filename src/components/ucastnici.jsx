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
            <a href={`/ucastnici/detail.html?id=${index}`} class="btn btn-primary">
              Detail
            </a>
          </td>
        </tr>
      ))}
    </>
  );
};

export const UcastnikDetail = ({ jmeno, prijmeni, bydliste, gender, profilovyObrazek }) => {
  return (
    <div class="card" style="width: 18rem;">
      {profilovyObrazek && <img src={profilovyObrazek} class="card-img-top" alt="profilová fotka" />}
      <div class="card-body">
        <h5 class="card-title">{jmeno + " " + prijmeni}</h5>
        <p class="card-text">Bydliště: {bydliste || <em>neuvedeno</em>}</p>
      </div>
    </div>
  );
};
