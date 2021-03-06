@bs.val external parseIntWithRadix: ('a, int) => int = "parseInt"

let fromString = string => {
  let value =
    string->Digest.string->Digest.to_hex->Js.String.sliceToEnd(~from=-4, _)->parseIntWithRadix(16)
  let x1 = int_of_float(value->float_of_int /. 183.0)
  let x2 = int_of_float(value->float_of_int /. 220.0)
  "linear-gradient(to bottom right, hsl(" ++
  (x1->Js.String.make ++
  (", 100%, 35%), hsl(" ++ (x2->Js.String.make ++ ", 100%, 30%))")))
}
