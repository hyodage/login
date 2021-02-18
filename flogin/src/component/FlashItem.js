import { useDelMsg } from '../store/action'
function FlashItem(props) {
    const { id, text, type } = props
    const delMsg = useDelMsg();
    const handleClick = () => {
        delMsg(id)
    }
    return <div className={`alert ${type}`}>
        {text}
        <button type="button" className="close" aria-label="Close" onClick={handleClick}>
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
}
export default FlashItem