import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import Layout from "../../../components/layout/layout";

describe("tests in <Layout />", () => {
  const wrapper = shallow(<Layout />);

  test("should render successful", () => {

    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="layout"
      >
        <Header
          className="layout-header bordered"
        />
        <main
          className="layout-main bordered"
        >
          <section
            className="layout-content"
          />
        </main>
        <footer
          className="layout-footer bordered"
        >
          © 2021 KeepCoding - CodeSword - Práctica final
        </footer>
      </div>
    `);

  });
  
});
