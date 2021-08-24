import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import FilterCamps from "../../../components/filter.js/Filter";

describe("tests in <FilterCamps />", () => {
  const wrapper = shallow(<FilterCamps />);

  test("should render successful", () => {

    expect(wrapper).toMatchInlineSnapshot(`
      <Form
        className="mb-3"
        onSubmit={[Function]}
      >
        <Row
          className="filterForm-Row"
        >
          <FormGroup
            as={
              Object {
                "$$typeof": Symbol(react.forward_ref),
                "render": [Function],
              }
            }
          >
            <FormLabel
              className="filterForm-label"
              column={false}
              visuallyHidden={false}
            >
              Name
            </FormLabel>
            <FormControl
              className="filter-name"
              onChange={[Function]}
              placeholder="Eiffel Tower, Malta Order..."
              type="text"
              value=""
            />
          </FormGroup>
          <FormGroup
            as={
              Object {
                "$$typeof": Symbol(react.forward_ref),
                "render": [Function],
              }
            }
          >
            <FormLabel
              className="filterForm-label filter-placeholder"
              column={false}
              visuallyHidden={false}
            >
              Country
            </FormLabel>
            <FormControl
              className="filter-name"
              onChange={[Function]}
              placeholder="France, United Kingdom..."
              type="text"
              value=""
            />
          </FormGroup>
        </Row>
        <Row
          className="filterForm-Row"
        >
          <FormGroup
            as={
              Object {
                "$$typeof": Symbol(react.forward_ref),
                "render": [Function],
              }
            }
          >
            <FormLabel
              className="filterForm-label filter-placeholder"
              column={false}
              visuallyHidden={false}
            >
              From
            </FormLabel>
            <FormControl
              className="filter-date"
              max="2025-12-31"
              min="2021-08-24"
              onChange={[Function]}
              placeholder="desde"
              type="date"
              value="2021-08-24"
            />
          </FormGroup>
          <FormGroup
            as={
              Object {
                "$$typeof": Symbol(react.forward_ref),
                "render": [Function],
              }
            }
          >
            <FormLabel
              className="filterForm-label"
              column={false}
              visuallyHidden={false}
            >
              To
            </FormLabel>
            <FormControl
              className="filter-date"
              max="2025-12-31"
              min="2021-08-24"
              onChange={[Function]}
              placeholder="hasta"
              type="date"
              value=""
            />
          </FormGroup>
        </Row>
        <FormGroup>
          <FormLabel
            className="filterForm-label"
            column={false}
            visuallyHidden={false}
          >
            Activities
          </FormLabel>
          <br />
          <div
            className="filterForm-checkbox"
          >
            <CheckboxFilter
              classNames="filter-tag"
              handleChange={[Function]}
              key="0"
              label="pool"
              name="pool"
              value="pool"
            />
            <CheckboxFilter
              classNames="filter-tag"
              handleChange={[Function]}
              key="1"
              label="crafts workshop"
              name="crafts workshop"
              value="crafts workshop"
            />
            <CheckboxFilter
              classNames="filter-tag"
              handleChange={[Function]}
              key="2"
              label="recycling workshop"
              name="recycling workshop"
              value="recycling workshop"
            />
            <CheckboxFilter
              classNames="filter-tag"
              handleChange={[Function]}
              key="3"
              label="reading"
              name="reading"
              value="reading"
            />
            <CheckboxFilter
              classNames="filter-tag"
              handleChange={[Function]}
              key="4"
              label="museum"
              name="museum"
              value="museum"
            />
            <CheckboxFilter
              classNames="filter-tag"
              handleChange={[Function]}
              key="5"
              label="seminar"
              name="seminar"
              value="seminar"
            />
            <CheckboxFilter
              classNames="filter-tag"
              handleChange={[Function]}
              key="6"
              label="conference"
              name="conference"
              value="conference"
            />
            <CheckboxFilter
              classNames="filter-tag"
              handleChange={[Function]}
              key="7"
              label="meditation"
              name="meditation"
              value="meditation"
            />
            <CheckboxFilter
              classNames="filter-tag"
              handleChange={[Function]}
              key="8"
              label="show"
              name="show"
              value="show"
            />
          </div>
        </FormGroup>
        <Row
          className="filterForm-Row"
        >
          <FormGroup
            className="filterForm-submitWrapper"
          >
            <Button
              active={false}
              className="filterForm-submit"
              disabled={false}
              type="submit"
              variant="outline-dark"
            >
              Filtrar
            </Button>
          </FormGroup>
        </Row>
      </Form>
    `);

  });
  
});
