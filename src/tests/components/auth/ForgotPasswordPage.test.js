import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import ForgotPasswordPage from "../../../components/auth/ForgotPasswordPage/ForgotPasswordPage";

describe("tests in <ForgotPasswordPage />", () => {
  const wrapper = shallow(<ForgotPasswordPage />);

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
            className="text-header login-title"
          >
            Reset Password
          </CardHeader>
          <ForgotPasswordForm
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
