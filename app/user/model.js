import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connect, AlertToSlack } from "../../lib";

const Users = {
  //gen Token Example
  genToken(user) {
    return jwt.sign({ sub: user }, "is salt", { expiresIn: "1h" });
  },

  // verlify Password Example
  verify(user, password) {
    try {
      return new Promise((resolve, reject) => {
        const hash = user.User_Password;
        bcrypt.compare(password, hash, (err, isValid) => {
          if (err) return reject(err);
          return resolve(isValid);
        });
      });
    } catch (error) {
      console.log(error);
      AlertToSlack.alertError(parameter)
    }
  },

  //query data from database Example

  async find(IDFROMACCESSTOKEN) {
    try {
      let finddata_ID = await connect.query(
        "SQL COMMAND",
        [IDFROMACCESSTOKEN]
      );
      return finddata_ID[0];
    } catch (error) {
      console.log(error);
    }
  }

};

export default Users;
