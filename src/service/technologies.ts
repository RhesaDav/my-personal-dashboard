import { TechnologiesDataProps } from "@/components/templates";
import { http } from "@/http";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useListTechnologies = () => {
  return useQuery('technologies',async() => {
    const res = await http.get('/technologies')
    return res.data
  }, {
    initialData: []
  });
};

export const useAddTechnologies = () => {
  const queryClient = useQueryClient()
  return useMutation(async (data:TechnologiesDataProps) => {
    const res = await http.post('/technologies', data);
      return res.data;
  }, {
    onSuccess: () => {
        queryClient.invalidateQueries('technologies')
    }
  })
};

export const useDeleteTechnologies = () => {
    const queryClient = useQueryClient()
    return useMutation(async (id:string) => {
      const res = await http.delete('/technologies?id='+id);
        return res.data;
    }, {
      onSuccess: () => {
          queryClient.invalidateQueries('technologies')
      }
    })
  };
