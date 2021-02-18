function flash(flash = [], action) {
    switch (action.type) {
        case "ADD_FLASH":
            return [
                ...flash,
                action.payload
            ];
        case "DELETE_FLASH":
            const idx = flash.findIndex(item => item.id === action.id);
            return [
                ...flash.slice(0, idx),
                ...flash.slice(idx + 1)
            ];
        default:
            return flash;
    }
}
export default flash;