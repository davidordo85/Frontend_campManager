import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { Pagination } from "react-bootstrap";

describe("tests in <Pagination />", () => {

  const wrapper = shallow(<Pagination />);

  test("should render successful", () => {
    expect(wrapper).toMatchInlineSnapshot(`
      <ul
        className="pagination"
      />
    `);

  });
  
});
