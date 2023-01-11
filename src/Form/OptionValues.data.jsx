export const GradingSystems = [
  {
    id: 1,
    value: "0-39=F, 40-49=E, 50-59=D, 60-69=C, 70-79=B, 80-100=A",
  },
  {
    id: 2,
    value: "0-44=F, 45-49=E, 50-59=D, 60-69=C, 70-79=B, 80-100=A",
  },
  {
    id: 3,
    value: "0-49=F, 50-59=E, 60-69=D, 70-79=C, 80-89=B, 90-100=A",
  },
];

export const AcademicSessions = [
  {
    id: 1,
    value: "First term",
  },
  {
    id: 2,
    value: "Second term",
  },

  {
    id: 2,
    value: "Third term",
  },
];
export const AcademicTerms = [
  {
    id: 1,
    value: "First term",
  },
  {
    id: 2,
    value: "Second term",
  },

  {
    id: 2,
    value: "Third term",
  },
];

const presentYear = new Date(Date.now()).getFullYear();
export const Years = new Array(15).fill("").map((data, index) => {
  return { id: index + 1, value: presentYear - index };
});
