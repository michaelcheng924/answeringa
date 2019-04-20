import { formatNumber } from "accounting";

import data from "../src/constants/abortions-by-year";

import Layout from "../src/components/Layout";
import ImageHeader from "../src/components/ImageHeader";
import Container from "../src/components/Container";

const byYearData = {
  title: "Number of Abortions per Year since Roe v. Wade",
  subtitle: "Over 60 million.",
  image: ``,
  url: `/number-abortions-per-year-since-roe-wade`
};

export default () => {
  return (
    <Layout headData={byYearData}>
      <ImageHeader {...byYearData} />
      <div>
        <div
          style={{
            background: "#424242",
            color: "#fff",
            padding: "30px 0"
          }}
        >
          <Container>
            <div
              className="bebas"
              style={{
                fontSize: 70,
                lineHeight: `70px`
              }}
            >
              {formatNumber(
                data.reduce((result, item) => {
                  result += item.number;
                  return result;
                }, 0)
              )}
            </div>
            <div
              style={{
                fontSize: 20,
                lineHeight: "28px"
              }}
            >
              babies killed by abortion since 1973, the year that
              abortion-on-demand was legalized through Roe v. Wade.
            </div>
          </Container>
        </div>
        <div
          className="d-flex flex-wrap"
          style={{
            justifyContent: "center"
          }}
        >
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th># of reported abortions</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => {
                return (
                  <tr key={item.year}>
                    <td>{item.year}</td>
                    <td>{formatNumber(item.number)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};
