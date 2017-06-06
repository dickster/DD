import {Version} from "./Version";

export interface DocId {
    id:number;
    version:Version|number;  // nullable.
}
