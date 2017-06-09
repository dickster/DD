
// i should just write my own expression parser here (for security reasons mostly)
// but i'll just use eval now to handle this.

export class Expression {
    text:string;             // e.g. first=='JOHN'
    normalizedText:string;   // name.first=='JOHN'

    public evaluate(context:any):boolean {
        // expr = interpolation(text);
        // return eval(expr);
        return true;
    };
}
