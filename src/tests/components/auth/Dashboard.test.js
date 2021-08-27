import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import Dashboard from "../../../components/auth/Dashboard/Dashboard";

describe("tests in <Dashboard />", () => {
  const wrapper = shallow(<Dashboard />);

  test("should render successful", () => {
    expect(wrapper).toMatchInlineSnapshot(`<div />`);
  });
});
