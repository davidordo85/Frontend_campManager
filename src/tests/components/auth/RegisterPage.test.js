import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import RegisterPage from "../../../components/auth/RegisterPage/RegisterPage";

describe("tests in <RegisterPage />", () => {
  const wrapper = shallow(<RegisterPage />);

  test("should render successful", () => {
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="registerPage"
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
          className="card-register"
        >
          <CardHeader
            className="text-header"
          >
            <CardText
              className="register-title"
            >
              CampManager Register
            </CardText>
          </CardHeader>
          <CardBody>
            <RegisterForm
              isLoading={false}
              onSubmit={[Function]}
            />
          </CardBody>
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
