import { axiosClient } from "@/utils/GlobalApi";

export async function getCatalogProps() {
    try {
        const response = await axiosClient.get('/catalogs?populate=*');
        const catalogs = response.data || [];
        console.log(catalogs);
        return { catalogs }
    } catch (error) {
        console.error('Ошибка получения данных:', error);
        return { catalogs: [] }
    }
}
