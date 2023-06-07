import { RootState } from "store/store.config"

const list = (state:RootState) => state.escursioni.resposeAttivita
const page = (state:RootState) => state.escursioni.page
export const escursioniSelector = {
    list,
    page

}
