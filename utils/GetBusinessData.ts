import { dehydrate, QueryClient, useQuery } from 'react-query'

//release -- ("https://mystrapicms.onrender.com/api/stores/1?populate=*")
//debug -- ("http://localhost:1337/api/stores/1?populate=*")

const webStoreId = 1;

const getWebStoreData = async () => {
    const webStore: any = await (await fetch("https://patrickanywhere.pythonanywhere.com/getWebStoreData?id=" + webStoreId.toString())).json();

    const result: any = webStore[0];
    
    return result;
}

const BusinessData = () => {
  const { data, isLoading, isFetching } = useQuery('restaurant', getWebStoreData);

  return (
      {data, isLoading, isFetching}
  )
}

export default BusinessData

export async function getStaticProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery("restaurant", getWebStoreData);

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    };
}