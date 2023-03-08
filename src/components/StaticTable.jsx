import { useState } from "react";
import { standardAcount } from "../constants/index";
import { arrowDown, arrowUp } from "../../public/index";

function StaticTable() {
  const [order, setOrder] = useState(1);
  const [colunmOrder, setColunmOrder] = useState("coin");
  const [query, setQuery] = useState("");
  const [selectValue, setSelectValue] = useState("value3");
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);
  const [clicked6, setClicked6] = useState(false);

  const handleOrder = (fieldName) => {
    setOrder(-order);
    setColunmOrder(fieldName);
  };

  var filter1 = standardAcount.filter((obj) => {
    return obj.option === 10;
  });
  var filter2 = standardAcount.filter((obj) => {
    return obj.option === 10 || obj.option === 20;
  });
  var filter3 = standardAcount.filter((obj) => {
    return obj.option === 10 || obj.option === 20 || obj.option === 30;
  });

  filter1.sort((a, b) => {
    return parseFloat(a[colunmOrder]) < parseFloat(b[colunmOrder])
      ? -order
      : order;
  });

  filter2.sort((a, b) => {
    return parseFloat(a[colunmOrder]) < parseFloat(b[colunmOrder])
      ? -order
      : order;
  });

  filter3.sort((a, b) => {
    return parseFloat(a[colunmOrder]) < parseFloat(b[colunmOrder])
      ? -order
      : order;
  });

  if (selectValue === "value1") {
    return (
      <section>
        <div className="container mx-auto">
          <div className="flex">
            <select
              value={selectValue}
              onChange={(e) => {
                setSelectValue(e.target.value);
              }}
              className="mt-10 border-2 border-[#000] text-center w-[80px]"
            >
              <option value="value1">10</option>

              <option value="value2">25</option>
              <option value="value3">50</option>
              {/* <option value="value4">100</option> */}
            </select>

            <input
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Pesquisar"
              className=" ml-auto mt-10 border-2 border-[#000] text-center"
            />
          </div>
          <table className="table-auto mx-auto p-5 my-10">
            <thead>
              <tr className="p-2 text-center divide-x-2 divide-[#000] border-b-2 border-[#000] select-none">
                <th
                  onClick={(e) => {
                    handleOrder("coin");
                    setClicked(!clicked);
                  }}
                  className="p-2 cursor-pointer"
                >
                  Par de moedas
                  <img
                    src={clicked ? arrowDown : arrowUp}
                    alt="arrow"
                    className="w-[20px] h-[20px] mx-auto"
                  />
                </th>
                <th
                  onClick={(e) => {
                    handleOrder("minimumFluctuation");
                    setClicked2(!clicked2);
                  }}
                  className="p-2 cursor-pointer"
                >
                  Flutuação mínima <br /> de preços
                  <img
                    src={clicked2 ? arrowDown : arrowUp}
                    alt="arrow"
                    className="w-[20px] h-[20px] mx-auto"
                  />
                </th>
                <th
                  onClick={(e) => {
                    handleOrder("lowSpread");
                    setClicked3(!clicked3);
                  }}
                  className="p-2 cursor-pointer"
                >
                  Spreads <br />
                  tão baixos quanto*
                  <img
                    src={clicked3 ? arrowDown : arrowUp}
                    alt="arrow"
                    className="w-[20px] h-[20px] mx-auto"
                  />
                </th>
                <th
                  onClick={(e) => {
                    handleOrder("avarageSpread");
                    setClicked4(!clicked4);
                  }}
                  className="p-2 cursor-pointer"
                >
                  Spreads médios*
                  <img
                    src={clicked4 ? arrowDown : arrowUp}
                    alt="arrow"
                    className="w-[20px] h-[20px] mx-auto"
                  />
                </th>
                <th
                  onClick={(e) => {
                    handleOrder("longSwap");
                    setClicked5(!clicked5);
                  }}
                  className="p-2 cursor-pointer"
                >
                  Valor de swap longo <br />
                  (pontos)**
                  <img
                    src={clicked5 ? arrowDown : arrowUp}
                    alt="arrow"
                    className="w-[20px] h-[20px] mx-auto"
                  />
                </th>
                <th
                  onClick={(e) => {
                    handleOrder("shortSwap");
                    setClicked6(!clicked6);
                  }}
                  className="p-2 cursor-pointer"
                >
                  Valor de swap curto
                  <br />
                  (pontos)**
                  <img
                    src={clicked6 ? arrowDown : arrowUp}
                    alt="arrow"
                    className="w-[20px] h-[20px] mx-auto"
                  />
                </th>
                <th className="p-2">Valor de 1 lote</th>
                <th className="p-2">Níveis de limite e paragem***</th>
              </tr>
            </thead>
            <tbody className="">
              {filter1
                .filter((item) => item.coin.toLowerCase().includes(query))
                .map((item) => (
                  <tr
                    key={item.key}
                    className="p-2 text-center divide-x-2 divide-[#000] hover:bg-[#1B4A64] hover:text-white"
                  >
                    <td className="p-2 custom-row">{item.coin}</td>

                    <td className="p-2 custom-row">
                      {item.minimumFluctuation}
                    </td>

                    <td className="p-2 custom-row">{item.lowSpread}</td>

                    <td className="p-2 custom-row">{item.avarageSpread}</td>

                    <td className="p-2 custom-row">{item.longSwap}</td>

                    <td className="p-2 custom-row">{item.shortSwap}</td>

                    <td className="p-2 custom-row">{item.value}</td>

                    <td className="p-2 custom-row">{item.level}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  if (selectValue === "value2") {
    return (
      <section>
        <div className="container mx-auto">
          <div className="flex">
            <select
              value={selectValue}
              onChange={(e) => {
                setSelectValue(e.target.value);
              }}
              className="mt-10 border-2 border-[#000] text-center w-[80px]"
            >
              <option value="value1">10</option>

              <option value="value2">25</option>
              <option value="value3">50</option>
              {/* <option value="value4">100</option> */}
            </select>

            <input
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Pesquisar"
              className=" ml-auto mt-10 border-2 border-[#000] text-center"
            />
          </div>
          <table className="table-auto mx-auto p-5 my-10">
            <thead>
              <tr className="p-2 text-center divide-x-2 divide-[#000] border-b-2 border-[#000] select-none">
                <th
                  onClick={(e) => {
                    handleOrder("coin");
                    setClicked(!clicked);
                  }}
                  className="p-2 cursor-pointer"
                >
                  Par de moedas
                  <img
                    src={clicked ? arrowDown : arrowUp}
                    alt="arrow"
                    className="w-[20px] h-[20px] mx-auto"
                  />
                </th>
                <th
                  onClick={(e) => {
                    handleOrder("minimumFluctuation");
                    setClicked2(!clicked2);
                  }}
                  className="p-2 cursor-pointer"
                >
                  Flutuação mínima <br /> de preços
                  <img
                    src={clicked2 ? arrowDown : arrowUp}
                    alt="arrow"
                    className="w-[20px] h-[20px] mx-auto"
                  />
                </th>
                <th
                  onClick={(e) => {
                    handleOrder("lowSpread");
                    setClicked3(!clicked3);
                  }}
                  className="p-2 cursor-pointer"
                >
                  Spreads <br />
                  tão baixos quanto*
                  <img
                    src={clicked3 ? arrowDown : arrowUp}
                    alt="arrow"
                    className="w-[20px] h-[20px] mx-auto"
                  />
                </th>
                <th
                  onClick={(e) => {
                    handleOrder("avarageSpread");
                    setClicked4(!clicked4);
                  }}
                  className="p-2 cursor-pointer"
                >
                  Spreads médios*
                  <img
                    src={clicked4 ? arrowDown : arrowUp}
                    alt="arrow"
                    className="w-[20px] h-[20px] mx-auto"
                  />
                </th>
                <th
                  onClick={(e) => {
                    handleOrder("longSwap");
                    setClicked5(!clicked5);
                  }}
                  className="p-2 cursor-pointer"
                >
                  Valor de swap longo <br />
                  (pontos)**
                  <img
                    src={clicked5 ? arrowDown : arrowUp}
                    alt="arrow"
                    className="w-[20px] h-[20px] mx-auto"
                  />
                </th>
                <th
                  onClick={(e) => {
                    handleOrder("shortSwap");
                    setClicked6(!clicked6);
                  }}
                  className="p-2 cursor-pointer"
                >
                  Valor de swap curto
                  <br />
                  (pontos)**
                  <img
                    src={clicked6 ? arrowDown : arrowUp}
                    alt="arrow"
                    className="w-[20px] h-[20px] mx-auto"
                  />
                </th>
                <th className="p-2">Valor de 1 lote</th>
                <th className="p-2">Níveis de limite e paragem***</th>
              </tr>
            </thead>
            <tbody className="">
              {filter2
                .filter((item) => item.coin.toLowerCase().includes(query))
                .map((item) => (
                  <tr
                    key={item.key}
                    className="p-2 text-center divide-x-2 divide-[#000] hover:bg-[#1B4A64] hover:text-white"
                  >
                    <td className="p-2 custom-row">{item.coin}</td>

                    <td className="p-2 custom-row">
                      {item.minimumFluctuation}
                    </td>

                    <td className="p-2 custom-row">{item.lowSpread}</td>

                    <td className="p-2 custom-row">{item.avarageSpread}</td>

                    <td className="p-2 custom-row">{item.longSwap}</td>

                    <td className="p-2 custom-row">{item.shortSwap}</td>

                    <td className="p-2 custom-row">{item.value}</td>

                    <td className="p-2 custom-row">{item.level}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  if (selectValue === "value3") {
    return (
      <section>
        <div className="container mx-auto">
          <div className="flex">
            <select
              value={selectValue}
              onChange={(e) => {
                setSelectValue(e.target.value);
              }}
              className="mt-10 border-2 border-[#000] text-center w-[80px]"
            >
              <option value="value1">10</option>

              <option value="value2">25</option>
              <option value="value3">50</option>
              {/* <option value="value4">100</option> */}
            </select>

            <input
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Pesquisar"
              className=" ml-auto mt-10 border-2 border-[#000] text-center"
            />
          </div>
          <table className="table-auto mx-auto p-5 my-10">
            <thead>
              <tr className="p-2 text-center divide-x-2 divide-[#000] border-b-2 border-[#000] select-none">
                <th
                  onClick={(e) => {
                    handleOrder("coin");
                    setClicked(!clicked);
                  }}
                  className="p-2 cursor-pointer"
                >
                  Par de moedas
                  <img
                    src={clicked ? arrowDown : arrowUp}
                    alt="arrow"
                    className="w-[20px] h-[20px] mx-auto"
                  />
                </th>
                <th
                  onClick={(e) => {
                    handleOrder("minimumFluctuation");
                    setClicked2(!clicked2);
                  }}
                  className="p-2 cursor-pointer"
                >
                  Flutuação mínima <br /> de preços
                  <img
                    src={clicked2 ? arrowDown : arrowUp}
                    alt="arrow"
                    className="w-[20px] h-[20px] mx-auto"
                  />
                </th>
                <th
                  onClick={(e) => {
                    handleOrder("lowSpread");
                    setClicked3(!clicked3);
                  }}
                  className="p-2 cursor-pointer"
                >
                  Spreads <br />
                  tão baixos quanto*
                  <img
                    src={clicked3 ? arrowDown : arrowUp}
                    alt="arrow"
                    className="w-[20px] h-[20px] mx-auto"
                  />
                </th>
                <th
                  onClick={(e) => {
                    handleOrder("avarageSpread");
                    setClicked4(!clicked4);
                  }}
                  className="p-2 cursor-pointer"
                >
                  Spreads médios*
                  <img
                    src={clicked4 ? arrowDown : arrowUp}
                    alt="arrow"
                    className="w-[20px] h-[20px] mx-auto"
                  />
                </th>
                <th
                  onClick={(e) => {
                    handleOrder("longSwap");
                    setClicked5(!clicked5);
                  }}
                  className="p-2 cursor-pointer"
                >
                  Valor de swap longo <br />
                  (pontos)**
                  <img
                    src={clicked5 ? arrowDown : arrowUp}
                    alt="arrow"
                    className="w-[20px] h-[20px] mx-auto"
                  />
                </th>
                <th
                  onClick={(e) => {
                    handleOrder("shortSwap");
                    setClicked6(!clicked6);
                  }}
                  className="p-2 cursor-pointer"
                >
                  Valor de swap curto
                  <br />
                  (pontos)**
                  <img
                    src={clicked6 ? arrowDown : arrowUp}
                    alt="arrow"
                    className="w-[20px] h-[20px] mx-auto"
                  />
                </th>
                <th className="p-2">Valor de 1 lote</th>
                <th className="p-2">Níveis de limite e paragem***</th>
              </tr>
            </thead>
            <tbody className="">
              {filter3
                .filter((item) => item.coin.toLowerCase().includes(query))
                .map((item) => (
                  <tr
                    key={item.key}
                    className="p-2 text-center divide-x-2 divide-[#000] hover:bg-[#1B4A64] hover:text-white"
                  >
                    <td className="p-2 custom-row">{item.coin}</td>

                    <td className="p-2 custom-row">
                      {item.minimumFluctuation}
                    </td>

                    <td className="p-2 custom-row">{item.lowSpread}</td>

                    <td className="p-2 custom-row">{item.avarageSpread}</td>

                    <td className="p-2 custom-row">{item.longSwap}</td>

                    <td className="p-2 custom-row">{item.shortSwap}</td>

                    <td className="p-2 custom-row">{item.value}</td>

                    <td className="p-2 custom-row">{item.level}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  return <></>;
}

export default StaticTable;
