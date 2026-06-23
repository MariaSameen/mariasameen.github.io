/**
 * publications.js
 * ---------------
 * Edit this file to update the publications list on the website.
 * To add a publication: copy an existing entry in the relevant array,
 * fill in the fields, and save. The site will render it automatically.
 *
 * Fields:
 *   authors  — string  (author list)
 *   title    — string  (paper title)
 *   venue    — string  (journal / conference / publisher info)
 *   year     — number
 *   doi      — string | null  (DOI without https://doi.org/ prefix)
 *   url      — string | null  (fallback link if no DOI)
 *   note     — string | null  (e.g. "Under Review", "Best Paper Award")
 *   bibtex   — string | null  (BibTeX block for copy-to-clipboard button)
 */

const PUBLICATIONS_DATA = {

  /* ── PATENT ──────────────────────────────────────────────────── */
  patent: [
    {
      authors: "Sameen M et al.",
      title: "Method and Apparatus for Detecting a Model Poisoning Attack",
      venue: "Korean Patent Registration No. 1026268280000",
      year: 2024,
      doi: null,
      url: null,
      note: null,
      bibtex: `@patent{sameen2024poisonpatent,
  author      = {Sameen, Maria and others},
  title       = {Method and Apparatus for Detecting a Model Poisoning Attack},
  number      = {1026268280000},
  nationality = {KR},
  year        = {2024},
  month       = {1},
  day         = {15}
}`
    }
  ],

  /* ── JOURNAL ARTICLES ────────────────────────────────────────── */
  journals: [
    {
      authors: "Das Chowdhury P, Sameen M, Blessing J, Boucher N, Gardiner J, Burrows T, Anderson R, Rashid A",
      title: "Threat models over space and time: A case study of end-to-end-encrypted messaging applications",
      venue: "Software: Practice and Experience",
      year: 2024,
      doi: null,
      url: null,
      note: null,
      bibtex: `@article{daschowdhury2024threat,
  author  = {Das Chowdhury, Pritam and Sameen, Maria and Blessing, Joseph and Boucher, Nicholas and Gardiner, Joseph and Burrows, Tom and Anderson, Ross and Rashid, Awais},
  title   = {Threat models over space and time: A case study of end-to-end-encrypted messaging applications},
  journal = {Software: Practice and Experience},
  year    = {2024},
  month   = {5}
}`
    },
    {
      authors: "Sameen M, Hwang SO",
      title: "DISTINCT: Data Poisoning Attacks Detection using Optimized Jaccard Distance",
      venue: "Computers, Materials &amp; Continua, vol. 73, no. 3, pp. 4559–4576",
      year: 2022,
      doi: null,
      url: null,
      note: null,
      bibtex: `@article{sameen2022distinct,
  author  = {Sameen, Maria and Hwang, Seong Oun},
  title   = {{DISTINCT}: Data Poisoning Attacks Detection using Optimized {Jaccard} Distance},
  journal = {Computers, Materials \\& Continua},
  volume  = {73},
  number  = {3},
  pages   = {4559--4576},
  year    = {2022}
}`
    },
    {
      authors: "Sameen M, Hwang SO",
      title: "TIMPANY — Detection of Model Poisoning Attacks using Accuracy",
      venue: "IEEE Access, vol. 9, pp. 139415–139425",
      year: 2021,
      doi: "10.1109/ACCESS.2021.3118926",
      url: null,
      note: null,
      bibtex: `@article{sameen2021timpany,
  author  = {Sameen, Maria and Hwang, Seong Oun},
  title   = {{TIMPANY} --- Detection of Model Poisoning Attacks using Accuracy},
  journal = {IEEE Access},
  volume  = {9},
  pages   = {139415--139425},
  year    = {2021},
  doi     = {10.1109/ACCESS.2021.3118926}
}`
    },
    {
      authors: "Sameen M, Han K, Hwang SO",
      title: "PhishHaven — An Efficient Real-Time AI Phishing URLs Detection System",
      venue: "IEEE Access, vol. 8, pp. 83425–83443",
      year: 2020,
      doi: "10.1109/ACCESS.2020.2991403",
      url: null,
      note: "Best Paper Award",
      bibtex: `@article{sameen2020phishhaven,
  author  = {Sameen, Maria and Han, Kyungmin and Hwang, Seong Oun},
  title   = {{PhishHaven} --- An Efficient Real-Time {AI} Phishing {URLs} Detection System},
  journal = {IEEE Access},
  volume  = {8},
  pages   = {83425--83443},
  year    = {2020},
  doi     = {10.1109/ACCESS.2020.2991403}
}`
    }
  ],

  /* ── CONFERENCE PROCEEDINGS ──────────────────────────────────── */
  conferences: [
    {
      authors: "Zaina D, Sameen M, Ramokapane KM",
      title: "Beyond Transparency: IoT Labels as Infrastructures for Trust and Control",
      venue: "2027 IEEE Symposium on Security and Privacy, IEEE",
      year: 2027,
      doi: null,
      url: null,
      note: "Under Review",
      bibtex: null
    },
    {
      authors: "Chitchyan R, Belguith S, Omoronyia I, Sameen M",
      title: "Rethinking Data Collection Practices: User-Centred Patterns for Privacy-Aware (Energy) Services",
      venue: "2027 International Conference on Software Engineering (ICSE), IEEE/ACM",
      year: 2027,
      doi: null,
      url: null,
      note: "Submitted",
      bibtex: null
    },
    {
      authors: "Gardiner J, Abaimov S, Williams J, Shahbi F, Anastasakis K, Das Chowdhury P, Ellis W, Sameen M, Samanis E, Rashid A",
      title: "'If You Build it, They will Come' — A Blueprint for ICS-focused Capture-The-Flag Competitions",
      venue: "6th Workshop on CPS&amp;IoT Security and Privacy, pp. 27–40",
      year: 2024,
      doi: null,
      url: null,
      note: null,
      bibtex: `@inproceedings{gardiner2024blueprint,
  author    = {Gardiner, Joseph and Abaimov, Sergei and Williams, Jonathan and Shahbi, Farhan and Anastasakis, Konstantinos and {Das Chowdhury}, Pritam and Ellis, William and Sameen, Maria and Samanis, Emmanouil and Rashid, Awais},
  title     = {\`\`If You Build it, They will Come'' --- A Blueprint for {ICS}-focused Capture-The-Flag Competitions},
  booktitle = {Proceedings of the 6th Workshop on CPS\\&IoT Security and Privacy},
  pages     = {27--40},
  year      = {2024}
}`
    },
    {
      authors: "Sameen M, Rashid A",
      title: "Dark Patterns in Video Games: An Exploratory Study",
      venue: "8th Workshop on Technology and Consumer Protection (ConPro '24), co-located with IEEE S&amp;P 2024",
      year: 2024,
      doi: null,
      url: null,
      note: null,
      bibtex: `@inproceedings{sameen2024dark,
  author    = {Sameen, Maria and Rashid, Awais},
  title     = {Dark Patterns in Video Games: An Exploratory Study},
  booktitle = {8th Workshop on Technology and Consumer Protection (ConPro '24)},
  year      = {2024},
  note      = {Co-located with the 45th IEEE Symposium on Security and Privacy}
}`
    },
    {
      authors: "Das Chowdhury P, Sameen M, Blessing J, Boucher N, Gardiner J, Burrows T, Anderson R, Rashid A",
      title: "Threat Models over Space and Time: A Case Study of E2EE Messaging Applications",
      venue: "International Workshop on Privacy Engineering (IWPE'23), co-located with 8th IEEE EuroS&amp;P",
      year: 2023,
      doi: null,
      url: null,
      note: null,
      bibtex: `@inproceedings{daschowdhury2023threat,
  author    = {Das Chowdhury, Pritam and Sameen, Maria and Blessing, Joseph and Boucher, Nicholas and Gardiner, Joseph and Burrows, Tom and Anderson, Ross and Rashid, Awais},
  title     = {Threat Models over Space and Time: A Case Study of {E2EE} Messaging Applications},
  booktitle = {International Workshop on Privacy Engineering (IWPE'23)},
  year      = {2023}
}`
    },
    {
      authors: "Das Chowdhury P, Blessing J, Sameen M, Anderson R, Gardiner J, Rashid A",
      title: "Towards Human-Centric Endpoint Security",
      venue: "International Security Protocols Workshop",
      year: 2023,
      doi: null,
      url: null,
      note: null,
      bibtex: `@inproceedings{daschowdhury2023human,
  author    = {Das Chowdhury, Pritam and Blessing, Joseph and Sameen, Maria and Anderson, Ross and Gardiner, Joseph and Rashid, Awais},
  title     = {Towards Human-Centric Endpoint Security},
  booktitle = {International Security Protocols Workshop},
  year      = {2023}
}`
    },
    {
      authors: "Saad Sohail A, Sameen M, Ahmed Q",
      title: "Latent Dirichlet Allocation Algorithm using Linguistic Analysis",
      venue: "7th International Conference on Green and Human Information Technology (ICGHIT), pp. 116–118, IEEE",
      year: 2019,
      doi: null,
      url: null,
      note: null,
      bibtex: `@inproceedings{saadsohail2019lda,
  author    = {Saad Sohail, Ayesha and Sameen, Maria and Ahmed, Qamar},
  title     = {Latent {Dirichlet} Allocation Algorithm using Linguistic Analysis},
  booktitle = {Proceedings of the 7th International Conference on Green and Human Information Technology ({ICGHIT})},
  pages     = {116--118},
  year      = {2019},
  publisher = {IEEE}
}`
    },
    {
      authors: "Saad Sohail A, Sameen M, Ahmed Q",
      title: "Understanding Monetary Policy Communication: A VECM Approach Based on Pakistan",
      venue: "7th International Conference on Green and Human Information Technology (ICGHIT), pp. 133–138, IEEE",
      year: 2019,
      doi: null,
      url: null,
      note: "Best Paper Award",
      bibtex: `@inproceedings{saadsohail2019monetary,
  author    = {Saad Sohail, Ayesha and Sameen, Maria and Ahmed, Qamar},
  title     = {Understanding Monetary Policy Communication: A {VECM} Approach Based on {Pakistan}},
  booktitle = {Proceedings of the 7th International Conference on Green and Human Information Technology ({ICGHIT})},
  pages     = {133--138},
  year      = {2019},
  publisher = {IEEE}
}`
    },
    {
      authors: "Saad Sohail A, Sameen M, Ahmed Q",
      title: "Formal Notations of Linguistic Analysis for Monetary Policy",
      venue: "7th International Conference on Green and Human Information Technology (ICGHIT), pp. 119–121, IEEE",
      year: 2019,
      doi: null,
      url: null,
      note: null,
      bibtex: `@inproceedings{saadsohail2019formal,
  author    = {Saad Sohail, Ayesha and Sameen, Maria and Ahmed, Qamar},
  title     = {Formal Notations of Linguistic Analysis for Monetary Policy},
  booktitle = {Proceedings of the 7th International Conference on Green and Human Information Technology ({ICGHIT})},
  pages     = {119--121},
  year      = {2019},
  publisher = {IEEE}
}`
    }
  ],

  /* ── MAGAZINE ────────────────────────────────────────────────── */
  magazine: [
    {
      authors: "Ramokapane KM, Sameen M, Zaina D",
      title: "Inclusive IoT Privacy Labels",
      venue: "IEEE Security &amp; Privacy, Special Issue",
      year: 2024,
      doi: null,
      url: null,
      note: null,
      bibtex: `@article{ramokapane2024inclusive,
  author  = {Ramokapane, Kopo M and Sameen, Maria and Zaina, Dana},
  title   = {Inclusive {IoT} Privacy Labels},
  journal = {IEEE Security \\& Privacy},
  year    = {2024},
  note    = {Special Issue}
}`
    }
  ],

  /* ── TALKS ───────────────────────────────────────────────────── */
  talks: [
    {
      authors: "Sameen M, Rashid A",
      title: "Dataveillance: An Overlooked Side of Dark Patterns",
      venue: "Hot Privacy Engineering Techniques Symposium (HotPETS)",
      year: 2023,
      doi: null,
      url: null,
      note: null,
      bibtex: `@misc{sameen2023dataveillance,
  author       = {Sameen, Maria and Rashid, Awais},
  title        = {Dataveillance: An Overlooked Side of Dark Patterns},
  howpublished = {Talk at the Hot Privacy Engineering Techniques Symposium ({HotPETS})},
  year         = {2023}
}`
    },
    {
      authors: "Das Chowdhury P, Gardiner J, Sameen M, Alhindi KM, Peden JG, Ellis W, Mazeli CA, Tahaei M, Rashid A",
      title: "Building a Privacy Testbed",
      venue: "USENIX Conference on Privacy Engineering Practice and Respect",
      year: 2022,
      doi: null,
      url: null,
      note: null,
      bibtex: `@misc{daschowdhury2022testbed,
  author       = {Das Chowdhury, Pritam and Gardiner, Joseph and Sameen, Maria and Alhindi, Khalid M and Peden, Joel G and Ellis, William and Mazeli, Courage A and Tahaei, Mohammad and Rashid, Awais},
  title        = {Building a Privacy Testbed},
  howpublished = {{USENIX} Conference on Privacy Engineering Practice and Respect ({PEPR})},
  year         = {2022}
}`
    }
  ],

  /* ── POSTERS ─────────────────────────────────────────────────── */
  posters: [
    {
      authors: "Sameen M, Rashid A",
      title: "3Ds of Dark Patterns",
      venue: "ACE-CSR Conference (NCSC 2022)",
      year: 2022,
      doi: null,
      url: null,
      note: null,
      bibtex: `@misc{sameen20223ds,
  author       = {Sameen, Maria and Rashid, Awais},
  title        = {{3Ds} of Dark Patterns},
  howpublished = {Poster presented at the {ACE-CSR} Conference ({NCSC} 2022), Stratford-upon-Avon, UK},
  year         = {2022}
}`
    }
  ]
};
