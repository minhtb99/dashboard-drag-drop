import { nanoid } from "nanoid";

function genId() : string {
    return nanoid();
}

export default genId;