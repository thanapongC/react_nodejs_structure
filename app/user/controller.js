import Users from "./model";

const UsersController = {
  // controller function name
  UserRouteExample(req, res) {
    const { parameter } = req.body;

    // call model function from Users
    Users.create(parameter).then(valuecallback => {
      // respones express restful api
    });
  }
};

export default UsersController;
