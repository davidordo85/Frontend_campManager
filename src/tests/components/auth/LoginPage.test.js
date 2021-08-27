import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import LoginPage from "../../../components/auth/LoginPage/LoginPage";

describe("tests in <LoginPage />", () => {
  const wrapper = shallow(<LoginPage />);

  test("should render successful", () => {
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="loginPage"
      >
        <Navbar
          bg="dark"
          collapseOnSelect={false}
          expand="lg"
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
          </NavbarBrand>
        </Navbar>
        <Card
          body={false}
          border="dark"
          className="card-login"
        >
          <CardHeader
            className="text-header"
          >
            <CardText
              className="login-title"
            >
              Login
            </CardText>
          </CardHeader>
          <LoginForm
            className="loginPage-form"
            isLoading={false}
            onSubmit={[Function]}
          />
        </Card>
        <footer
          className="layout-footer bordered"
        >
          © 2021 KeepCoding - CodeSword - Práctica final
        </footer>
      </div>
    `);
  });
});
