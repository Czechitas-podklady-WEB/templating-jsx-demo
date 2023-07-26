export const LektoriTabulka = ({ lektori }) => {
  if (lektori.length === 0) {
    return (
      <div>
        <em>Seznam lektorů je prázdný.</em>
      </div>
    );
  }
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
              <a href={`/lektori/detail.html?id=${index}`} class="btn btn-primary">
                Detail
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const LektorDetail = ({ jmeno, prijmeni, role, profilovyObrazek }) => {
  return (
    <div class="card" style="width: 18rem;">
      {profilovyObrazek && <img src={profilovyObrazek} class="card-img-top" alt="profilová fotka" />}
      <div class="card-body">
        <h5 class="card-title">{jmeno + " " + prijmeni}</h5>
        <p class="card-text">Role: {role}</p>
      </div>
    </div>
  );
};
