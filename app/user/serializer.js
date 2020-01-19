import { Serializer } from "../../lib";

const UsersSerializer = {
  ...Serializer,

  //serialize Example

  // const data = {
  //   fristname: "developer"
  //   surname: "surnamedeveloper"
  // }

  serialize(data) {
    const { fristname } = data;

    return {
      fristname
    }; // return developer
  }
};

export default UsersSerializer;
