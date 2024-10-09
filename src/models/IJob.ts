export interface IJob {
  id: string;
  external_id: string;
  original_id: string;
  label: string;
  //"webpage_url": {},
  logo_url: string;
  headline: string;
  //application_deadline: string($date-time);
  number_of_vacancies: number;

  description: {
    text: "string";
    text_formatted: "string";
    company_information: "string";
    needs: "string";
    requirements: "string";
    conditions: "string";
  };

  employment_type: {
    concept_id: "string";
    label: "string";
    legacy_ams_taxonomy_id: "string";
  };
  salary_type: {
    concept_id: "string";
    label: "string";
    legacy_ams_taxonomy_id: "string";
  };

  salary_description: "string";
  duration: {
    concept_id: "string";
    label: "string";
    legacy_ams_taxonomy_id: "string";
  };
  working_hours_type: {
    concept_id: "string";
    label: "string";
    legacy_ams_taxonomy_id: "string";
  };
  scope_of_work: {
    min: 0;
    max: 0;
  };
  access: "string";
  employer: {
    phone_number: "string";
    email: "string";
    url: "string";
    organization_number: "string";
    name: "string";
    workplace: "string";
  };
  application_details: {
    information: "string";
    reference: "string";
    email: "string";
    via_af: true;
    url: "string";
    other: "string";
  };
  experience_required: true;
  access_to_own_car: true;
  driving_license_required: true;
  driving_license: [
    {
      concept_id: "string";
      label: "string";
      legacy_ams_taxonomy_id: "string";
    }
  ];
  occupation: {
    concept_id: "string";
    label: "string";
    legacy_ams_taxonomy_id: "string";
  };

  occupation_group: {
    concept_id: "string"; // narrowerId
    label: "string";
    legacy_ams_taxonomy_id: "string";
  };
  occupation_field: {
    concept_id: "string"; // groupId
    label: "string";
    legacy_ams_taxonomy_id: "string";
  };
  workplace_address: {
    municipality: "string";
    municipality_code: "string";
    municipality_concept_id: "string";
    region: "string";
    region_code: "string";
    region_concept_id: "string";
    country: "string";
    country_code: "string";
    country_concept_id: "string";
    street_address: "string";
    postcode: "string";
    city: "string";
    coordinates: [0];
  };
  must_have: {
    skills: [
      {
        concept_id: "string";
        label: "string";
        legacy_ams_taxonomy_id: "string";
        weight: 0;
      }
    ];
    languages: [
      {
        concept_id: "string";
        label: "string";
        legacy_ams_taxonomy_id: "string";
        weight: 0;
      }
    ];
    work_experiences: [
      {
        concept_id: "string";
        label: "string";
        legacy_ams_taxonomy_id: "string";
        weight: 0;
      }
    ];
    education: [
      {
        concept_id: "string";
        label: "string";
        legacy_ams_taxonomy_id: "string";
        weight: 0;
      }
    ];
    education_level: [
      {
        concept_id: "string";
        label: "string";
        legacy_ams_taxonomy_id: "string";
        weight: 0;
      }
    ];
  };
  nice_to_have: {
    skills: [
      {
        concept_id: "string";
        label: "string";
        legacy_ams_taxonomy_id: "string";
        weight: 0;
      }
    ];
    languages: [
      {
        concept_id: "string";
        label: "string";
        legacy_ams_taxonomy_id: "string";
        weight: 0;
      }
    ];
    work_experiences: [
      {
        concept_id: "string";
        label: "string";
        legacy_ams_taxonomy_id: "string";
        weight: 0;
      }
    ];
    education: [
      {
        concept_id: "string";
        label: "string";
        legacy_ams_taxonomy_id: "string";
        weight: 0;
      }
    ];
    education_level: [
      {
        concept_id: "string";
        label: "string";
        legacy_ams_taxonomy_id: "string";
        weight: 0;
      }
    ];
  };
  application_contacts: {
    name: "string";
    description: "string";
    email: "string";
    telephone: "string";
    contact_type: "string";
  };
  publication_date: "2024-09-25T06:49:52.441Z";
  last_publication_date: "2024-09-25T06:49:52.441Z";
  removed: true;
  removed_date: "2024-09-25T06:49:52.441Z";
  source_type: "string";
  timestamp: 0;
}
