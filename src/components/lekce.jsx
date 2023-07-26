export const LekceTabulka = ({ seznamLekci }) => {
  return (
    <>
      {seznamLekci.map((lekce, index) => (
        <tr>
          <td>{index+1}.</td>
          <td>{lekce.nazev}</td>
          <td>{lekce.datum}</td>
          <td>{lekce.cas}</td>
          <td>{lekce.misto}</td>
        </tr>
      ))}
    </>
  );
};
