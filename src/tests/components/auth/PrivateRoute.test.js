import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import PrivateRoute from "../../../components/auth/PrivateRoute/PrivateRoute";

describe("tests in <PrivateRoute />", () => {
  const wrapper = shallow(<PrivateRoute />);

  test("should render successful", () => {
    expect(wrapper).toMatchInlineSnapshot(`
      <Route>
        <Component />
      </Route>
    `);
  });
});
