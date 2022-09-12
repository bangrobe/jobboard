const useMyFetch =(url, options) => {
    const config = useRuntimeConfig();
    return useFetch(url, {
        baseURL: config.public.BASE_API_URL,
        ...options
    })
}

const useBaseFetch = (url, options) => {
    const config = useRuntimeConfig();
    return $fetch(`${config.public.BASE_API_URL}/${url}`,options)
}

export { useMyFetch, useBaseFetch }