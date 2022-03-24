export const storeToLocal = async (data)=>{
    try {
        const lastData = await localStorage.getItem("note_app_data")

        if(!lastData){
            console.info("Belum ada data, dan data akan dibuat")
            let createLocal = localStorage.setItem("note_app_data", "[]")
        }

        let prevArray = await JSON.parse(localStorage.getItem("note_app_data"))
        let storeNewData = await prevArray.push(data)
        let newData = await localStorage.setItem("note_app_data", JSON.stringify(prevArray))

        return prevArray

    } catch (error) {
        return error
    }
}