import { BaseApiSlice } from "./BaseApiSlice";

export const TopicsApiSlice = BaseApiSlice.injectEndpoints({
  endpoints: (build) => ({
    fetchInterviewQuestions: build.query({
      query() {
        return "Interview/Interviews.json";
      },
    }),
  }),
  overrideExisting: true,
});

export const { useFetchInterviewQuestionsQuery } = TopicsApiSlice;
