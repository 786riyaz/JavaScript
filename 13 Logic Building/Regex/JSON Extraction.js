let resultObj = `Here is your json
{"key1":"Value1", "key2":"value2"}
`

let respHit = resultObj.match(new RegExp(`(?<=${key}​​​​​​": ")[^"]+`, 'g'));
if (respHit?.length > 0) {
    result = result.replace(new RegExp(`{​​​​​​${key}​​​​​​}​​​​​​`, 'g'), respHit[0]);
}
