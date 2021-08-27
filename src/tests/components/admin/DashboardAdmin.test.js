import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import DashboardAdmin from "../../../components/admin/DashboardAdmin/DashboardAdmin";

describe("tests in <DashboardAdmin />", () => {
  const wrapper = shallow(<DashboardAdmin />);

  test("should render successful", () => {
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="dashboardAdmin"
      >
        <Link
          className="link"
          to="/createCamp"
        >
          Create Camp
        </Link>
        <Link
          className="link"
          to="/modifyCamp"
        >
          Modify Camp
        </Link>
        <Link
          className="link"
          to="/requests"
        >
          Requests
        </Link>
        <Link
          className="link"
          to="/UserList"
        >
          Users List
        </Link>
        <Link
          className="link"
          to="/ObservationUser"
        >
          Observations Users
        </Link>
        <Link
          className="link"
          to="#"
        >
          Modify Profile
        </Link>
      </div>
    `);
  });
});
