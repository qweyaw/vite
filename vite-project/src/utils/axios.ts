export type msgData = {
    msg: string
}

export const axios = (url: string): Promise<msgData[]> => {
    return new Promise(resolve => {
        let xhr:XMLHttpRequest = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                setTimeout(() => {
                    console.log(xhr.responseText)
                    resolve(JSON.parse(xhr.responseText))
                }, 2000)
            }
        }
        return [{msg: 'default'}]
    })
}
