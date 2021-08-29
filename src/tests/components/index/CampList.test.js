import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import CampList from "../../../components/index/CampList";

describe("tests in <CampList />", () => {
  const location = "url";

  const wrapper = shallow(<CampList location={location} />);

  test("should render successful", () => {
    expect(wrapper).toMatchInlineSnapshot(`
      <Layout>
        <div
          className="container-camps"
        >
          <Card
            body={false}
            className="container-card"
          >
            <FilterCamps
              onSubmit={[Function]}
            />
            <styled.div
              hidden={true}
            />
            <Card
              body={false}
              border="light"
              className="card-list"
            >
              <EmptyList
                description="Tan solo tienes que registrarte y publicar tu campamento. En caso de tener cuenta, accede y publicalo."
                title="Aún no se ha registrado nadie, ¡Se el primero!"
              />
            </Card>
            <Pagination
              className="pagination"
              location="url"
              number={
                Array [
                  [Function],
                ]
              }
            />
          </Card>
        </div>
      </Layout>
    `);
  });
});
