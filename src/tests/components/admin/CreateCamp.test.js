import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import CreateCampPage from "../../../components/admin/CreateCamp/CreateCampPage";

describe("tests in <CreateCampPage />", () => {
  const wrapper = shallow(<CreateCampPage />);

  test("should render successful", () => {
    expect(wrapper).toMatchInlineSnapshot(`
      <Layout>
        <Card
          body={false}
          border="dark"
          className="card-createCamp"
        >
          <CardHeader
            className="title-createCamps-header"
          >
            <CardText
              className="title-createCamps"
            >
              Create Camp
            </CardText>
          </CardHeader>
          <CreateCampForm
            className=""
            isLoading={false}
            onSubmit={[Function]}
          />
        </Card>
      </Layout>
    `);
  });
});
