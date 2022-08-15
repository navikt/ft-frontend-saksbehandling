type JSONValue = string | number | boolean | JSONObject | JSONArray;

interface JSONObject {
  [x: string]: JSONValue;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface JSONArray extends Array<JSONValue> {}

type Feilmelding = {
  melding: string;
  tilleggsInfo?: JSONObject;
};

export default Feilmelding;
