import { BaseApiSlice } from "./BaseApiSlice";

export const AboutApiSlice = BaseApiSlice.injectEndpoints({
  endpoints: (build) => ({
    fetchIntroduction: build.query({
      query() {
        return "Aboutus/Inroduction.json";
      },
    }),
    fetchSkills: build.query({
      query() {
        return "Aboutus/Skills.json";
      },
    }),
  }),
  overrideExisting: true,
});

export const { useFetchIntroductionQuery, useFetchSkillsQuery } = AboutApiSlice;
