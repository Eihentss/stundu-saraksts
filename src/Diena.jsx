
import Stunda from "./Stunda";
function Diena(props) {

const stunduSarakstsJSX = props.stundas.map((stunda) => {
    return <Stunda name={stunda}/>
})

return (
    <>
    <h1>Sodien ir {props.nosaukums}</h1>
    <ol>
        {stunduSarakstsJSX}
    </ol>

    </>
)
}
export default Diena
