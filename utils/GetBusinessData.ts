import { dehydrate, QueryClient, useQuery } from 'react-query'

//release -- ("https://mystrapicms.onrender.com/api/stores/1?populate=*")
//debug -- ("http://localhost:1337/api/stores/1?populate=*")

const getRestaurantData = async () => await (await fetch("http://localhost:1337/api/stores/1?populate=*")).json().catch((value) => console.log(JSON.stringify(value)));

const BusinessData = () => {
  const { data, isLoading, isFetching } = useQuery('restaurant', getRestaurantData);

  return (
      {data, isLoading, isFetching}
  )
}

export default BusinessData

export async function getStaticProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery("restaurant", getRestaurantData);

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    };
}