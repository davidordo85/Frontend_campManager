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
          <PrivateRouteAdmin
            admin={false}
            exact={true}
            path="/campModify/:id"
          >
            <Component />
          </PrivateRouteAdmin>
          <PrivateRoute
            exact={true}
            onLogout={[Function]}
            path="/myProfile"
          >
            <MyProfile
              onLogout={[Function]}
            />
          </PrivateRoute>
          <PrivateRoute
            exact={true}
            onLogout={[Function]}
            path="/userRequests"
          >
            <Component />
          </PrivateRoute>
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
          <PrivateRouteAdmin
            admin={false}
            exact={true}
            path="/createCamp"
          >
            <CreateCampPage
              onLogout={[Function]}
            />
          </PrivateRouteAdmin>
          <PrivateRouteAdmin
            admin={false}
            exact={true}
            path="/requests"
          >
            <Requests
              onLogout={[Function]}
            />
          </PrivateRouteAdmin>
          <PrivateRouteAdmin
            admin={false}
            exact={true}
            path="/modifyCamp"
          >
            <Component />
          </PrivateRouteAdmin>
          <PrivateRouteAdmin
            admin={false}
            exact={true}
            path="/userList"
          >
            <Component />
          </PrivateRouteAdmin>
          <Route
            exact={true}
            path="/"
          >
            <Component />
          </Route>
          <Route
            path="/404"
          >
            <PageError />
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
