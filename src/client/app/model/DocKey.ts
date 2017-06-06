import {Version} from "./Version";

export interface DocKey {
    id:number;
    version:Version|number;  // nullable.
}
