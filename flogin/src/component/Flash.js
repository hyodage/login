import { useSelector } from 'react-redux'
import FlashItem from './FlashItem'
function Flash() {
    const flash = useSelector(state => state.flash) 
    return <>
        {
            flash.map((item) => {
                return <FlashItem {...item} key={item.id} />
            })
        }
    </>
}
export default Flash
