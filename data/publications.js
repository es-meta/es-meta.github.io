// Publications shown on the landing page, newest first.
// Add a new paper at the top. Fields:
//   title, url (DOI link), authors, venue (e.g. 'ASE 2026'),
//   award (optional), links (optional, [[label, url], ...])
const PUBLICATIONS = [
  {
    title: 'MiniPoly: Automatic Extraction of Efficient JavaScript Polyfill from Language Specification',
    url: 'https://doi.org/10.1145/3832783.3837549',
    authors: ['Jungwoong Kim', 'Youngmin Cho', 'Jihyeok Park'],
    venue: 'ASE 2026',
    award: 'ACM SIGSOFT Distinguished Paper Award',
  },
  {
    title: 'Selective Feature-Sensitive Coverage for Conformance Testing of Programming Languages',
    url: 'https://doi.org/10.1145/3808231',
    authors: ['Kanguk Lee', 'Seunghwan Kim', 'Jihyeok Park', 'Sukyoung Ryu'],
    venue: 'TOSEM 2026',
  },
  {
    title: 'JSSpecVis: A JavaScript Language Specification Visualization Tool',
    url: 'https://doi.org/10.1145/3696630.3728579',
    authors: ['Minseok Choe', 'Kyungho Song', 'Hyunjoon Kim', 'Jihyeok Park'],
    venue: 'FSE 2025 Demo',
    links: [['Old repo', 'https://github.com/ku-plrg/js-spec-vis']],
  },
  {
    title: 'JavaScript Language Design and Implementation in Tandem',
    url: 'https://doi.org/10.1145/3624723',
    authors: ['Sukyoung Ryu', 'Jihyeok Park'],
    venue: 'CACM 2024',
    links: [
      ['Article', 'https://cacm.acm.org/research/javascript-language-design-and-implementation-in-tandem/'],
      ['Video', 'https://youtu.be/JGxc-KIUnQY'],
    ],
  },
  {
    title: 'Feature-Sensitive Coverage for Conformance Testing of Programming Language Implementations',
    url: 'https://doi.org/10.1145/3591240',
    authors: ['Jihyeok Park', 'Dongjun Youn', 'Kanguk Lee', 'Sukyoung Ryu'],
    venue: 'PLDI 2023',
    links: [['Old repo', 'https://github.com/jestfs/jestfs']],
  },
  {
    title: 'Automatically Deriving JavaScript Static Analyzers from Specifications using Meta-Level Static Analysis',
    url: 'https://doi.org/10.1145/3540250.3549097',
    authors: ['Jihyeok Park', 'Seungmin An', 'Sukyoung Ryu'],
    venue: 'ESEC/FSE 2022',
    links: [['Old repo', 'https://github.com/kaist-plrg/jsaver']],
  },
  {
    title: 'JSTAR: JavaScript Specification Type Analyzer using Refinement',
    url: 'https://doi.org/10.1109/ASE51524.2021.9678781',
    authors: ['Jihyeok Park', 'Seungmin An', 'Wonho Shin', 'Yusung Sim', 'Sukyoung Ryu'],
    venue: 'ASE 2021',
    links: [['Old repo', 'https://github.com/kaist-plrg/jstar']],
  },
  {
    title: 'JEST: N+1-version Differential Testing of Both JavaScript Engines and Specification',
    url: 'https://doi.org/10.1109/ICSE43902.2021.00015',
    authors: ['Jihyeok Park', 'Seungmin An', 'Dongjun Youn', 'Gyeongwon Kim', 'Sukyoung Ryu'],
    venue: 'ICSE 2021',
    award: 'ACM SIGSOFT Distinguished Paper Award',
    links: [['Old repo', 'https://github.com/kaist-plrg/jest']],
  },
  {
    title: 'JISET: JavaScript IR-based Semantics Extraction Toolchain',
    url: 'https://doi.org/10.1145/3324884.3416632',
    authors: ['Jihyeok Park', 'Jihee Park', 'Seungmin An', 'Sukyoung Ryu'],
    venue: 'ASE 2020',
    links: [['Old repo', 'https://github.com/kaist-plrg/jiset']],
  },
];
