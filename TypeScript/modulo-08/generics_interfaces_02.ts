export { };

interface FetchResponse<T> {
    data: T;
    status: number;
    statusText: string;
    hearders: Record<string, string>

}

async function fetchJson<T> (url: string): Promise<FetchResponse<T>> {
    const response = await fetch(url);
    const hearders: Record<string, string> = { };

    response.headers.forEach((value, key) => {
        hearders[key] = value;

    });

    const data = await response.json();

    return {
        data: data as T,
        status: response.status,
        statusText: response.statusText,
        hearders,

    };

}

(async () => {
    const response = await fetchJson<{ title: string, userId: number, id: number, completed: boolean }> 
    ('https://jsonplaceholder.typicode.com/todos/1');

    console.log(response.data.userId);
    console.log(response.data.id);
    console.log(response.data.title);
    console.log(response.data.completed);
    
})();
