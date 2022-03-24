
export const getLocalData = async ()=>{
    try {
        const localData = await localStorage.getItem("note_app_data")
        return JSON.parse(localData)

    } catch (error) {
        return error
    }
}