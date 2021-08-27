import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import App from "../App";

describe("tests in index.js", () => {
  
  const wrapper = shallow(<App />);

  test("should render successful", () => {

    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="App"
      >
        <Switch>
          <Route
            exact={true}
            path="/campDetail/:id"
          >
            <Component />
          </Route>
          <Route
            path="/login"
          >
            <Component />
          </Route>
          <Route
            path="/register"
          >
            <RegisterPage />
          </Route>
          <Route
            path="/forgotpassword"
          >
            <ForgotPasswordPage />
          </Route>
          <Route
            exact={true}
            path="/createCamp"
          >
            <CreateCampPage
              onLogout={[Function]}
            />
          </Route>
          <Route
            exact={true}
            path="/requests"
          >
            <Requests
              onLogout={[Function]}
            />
          </Route>
          <Route
            exact={true}
            path="/modifyCamp"
          >
            <Requests
              onLogout={[Function]}
            />
          </Route>
          <Route
            exact={true}
            path="/userList"
          >
            <UserList
              onLogout={[Function]}
            />
          </Route>
          <Route
            exact={true}
            path="/ObservationUser"
          >
            <ObservationUser
              onLogout={[Function]}
            />
          </Route>
          <Route
            exact={true}
            path="/"
          >
            <Component />
          </Route>
          <Route
            path="/404"
          >
            <div
              style={
                Object {
                  "fontSize": 48,
                  "fontWeight": "bold",
                  "textAlign": "center",
                }
              }
            >
              404 | Not found page
            </div>
          </Route>
          <Route>
            <Redirect
              to="/404"
            />
          </Route>
        </Switch>
      </div>
    `);

  });

});
