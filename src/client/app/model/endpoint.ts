
export class Endpoint {
    private name:string;
    private parameters:string[];
    private base:string='./';

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