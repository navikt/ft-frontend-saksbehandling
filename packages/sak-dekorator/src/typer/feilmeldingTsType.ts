type JSONValue = string | number | boolean | JSONObject | JSONArray;

interface JSONObject {
  [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> {}

type Feilmelding = {
  melding: string;
  tilleggsInfo?: JSONObject;
};

export default Feilmelding;
