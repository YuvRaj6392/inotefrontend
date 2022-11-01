import noteContext from './NotesContext'
const NoteState=(props)=>{
    const state={
        "name":"harry",
        "class":"5c"
    }
    return (
        <noteContext.provider value={state}>
            {props.children}
        </noteContext.provider>
    )
}
export default NoteState;

