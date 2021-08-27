import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import Header from "../../../components/layout/Header";

describe("tests in <Header />", () => {

  const wrapper = shallow(<Header />);

  test("should render successful", () => {
    expect(wrapper).toMatchInlineSnapshot(`
      <Navbar
        bg="dark"
        className="header"
        collapseOnSelect={false}
        expand="lg"
        fixed="top"
        variant="light"
      >
        <NavbarBrand>
          <Link
            to="/"
            variant="outline-light"
          >
            <img
              alt="logo"
              className="logo"
              src="logoW.png"
            />
          </Link>
          <AuthButton
            className="login"
          />
          <Button
            active={false}
            as={
              Object {
                "$$typeof": Symbol(react.forward_ref),
                "propTypes": Object {
                  "innerRef": [Function],
                  "onClick": [Function],
                  "replace": [Function],
                  "target": [Function],
                  "to": [Function],
                },
                "render": [Function],
              }
            }
            className="register"
            disabled={false}
            size="lg"
            to="/Register"
            variant="outline-light"
          >
            Register
          </Button>
        </NavbarBrand>
      </Navbar>
    `);

  });
  
});
