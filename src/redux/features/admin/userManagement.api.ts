import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // getAllSemesters: builder.query({
        //   query: (args) => {
        //     console.log(args);
        //     const params = new URLSearchParams();
    
        //     if (args) {
        //       args.forEach((item: TQueryParam) => {
        //         params.append(item.name, item.value as string);
        //       });
        //     }
    
        //     return {
        //       url: '/academic-semesters',
        //       method: 'GET',
        //       params: params,
        //     };
        //   },
        //   transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        //     return {
        //       data: response.data,
        //       meta: response.meta,
        //     };
        //   },
        // }),
        addStudent: builder.mutation({
          query: (data) => ({
            url: '/user/create-student',
            method: 'POST',
            body: data,
          }),
        }),
      }),
})

export const {useAddStudentMutation}= userManagementApi