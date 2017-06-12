
export class Endpoint {
    // may need to add ability to call ng2 code, not just REST code on server.....

    private name:string;
    private parameters:string[];
    private base:string='./';   // get this from GULP build variable   <%= END_POINT %>

    constructor(name:string, parameters?:string[], base='./') {
        this.name=name;
        this.parameters = parameters;
        this.base = base;
    }

    private getUrl(obj:any):string {
        let url = this.base+'/'+name;

        if (this.parameters) {
            var esc = encodeURIComponent;
            var query = '?'+this.parameters
                .map(k => esc(k) + '=' + esc(obj[k]))
                .join('&');
            url+=query;
        }
        return url;
    }
}