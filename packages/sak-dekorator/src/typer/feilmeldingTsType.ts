type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

interface JSONObject {
  [x: string]: JSONValue;
}

type Feilmelding = {
  melding: string;
  tilleggsInfo?: JSONObject;
};

export default Feilmelding;
