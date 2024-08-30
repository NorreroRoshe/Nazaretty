export default function DetailsInformation({ information }) {
  console.log(information);
  return (
    <>
      {/* {information && information.length
        ? information.map((el, i) => (
            <div key={i + "information"} className="mt-5">
              <p>{el.details_text}</p>
              <table style={{ borderCollapse: "collapse", width: "100%" }} className="mt-4">
                <thead>
                  <tr>
                    {el.keys && el.keys.length
                      ? el.keys.map((head, headI) => (
                          <th
                            key={headI + "headI"}
                            style={{
                              border: "1px solid #dddddd",
                              padding: "8px",
                            }}
                          >
                            {head}
                          </th>
                        ))
                      : ""}
                  </tr>
                </thead>
                <tbody>
                  {el.data && el.data.length
                    ? el.data.map((body, bodyI) => (
                        <tr key={bodyI + "body"}>
                          {body && body.length
                            ? body.map((item, i) => (
                                <td
                                  key={i + "item"}
                                  style={{
                                    border: "1px solid #dddddd",
                                    padding: "8px",
                                  }}
                                >
                                  {item}
                                </td>
                              ))
                            : ""}
                        </tr>
                      ))
                    : ""}
                </tbody>
              </table>
            </div>
          ))
        : ""} */}
    {!!information?.lenght && (
      <p>Длинна: &nbsp;<span>{information?.lenght} см.</span></p>
    )}
    {!!information?.width && (
      <p>Ширина: &nbsp;<span>{information?.width} см.</span></p>
    )}
    {!!information?.diameter && (
      <p>Диаметр: &nbsp;<span>{information?.diameter} см.</span></p>
    )}
    {!!information?.height && (
      <p>Высота: &nbsp;<span>{information?.height} см.</span></p>
    )}
    {!!information?.otstup && (
      <p>Отступ от стены: &nbsp;<span>{information?.otstup} см.</span></p>
    )}
    {!!information?.istochnik && (
      <p>Источник света: &nbsp;<span>{information?.istochnik} см.</span></p>
    )}
  </>
  );
}
