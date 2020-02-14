import axios from "axios";

async function getDniPhone(entrataId, switchCode, ref) {
  const data = await axios.post("https://amli.entrata.com/api/public/dni", {
    method: {
      name: "getPhoneNumber",
      params: {
        switchCode,
        ref,
        propertyIds: [entrataId]
      }
    }
  });
  return data &&
    data.status === 200 &&
    data.data.response &&
    data.data.response.code === 200
    ? data.data.response.result[entrataId]
    : undefined;
}

export default getDniPhone;
