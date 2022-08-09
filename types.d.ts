export interface Options{
    
    method: string,
    url: string,
    params: {
        url: string | string[] | undefined,
        width: string,
        height: string,
        fullscreen: string,
    };
    headers: {
        'x-rapidapi-host': string,
        'x-rapidapi-key': string | undefined,
    };
}
