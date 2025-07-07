/**
 * @generated SignedSource<<cac9acfce73ec877689a83874024d269>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Stage = "APPLIED" | "HIRED" | "INTERVIEWED" | "REJECTED" | "SHORTLISTED" | "%future added value";
export type applicantsQuery_ApplicantsQuery$variables = {
  search?: string | null | undefined;
  skip?: number | null | undefined;
  stage?: Stage | null | undefined;
  take?: number | null | undefined;
};
export type applicantsQuery_ApplicantsQuery$data = {
  readonly applicants: {
    readonly applicants: ReadonlyArray<{
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"ApplicantRow_applicant">;
    }>;
    readonly totalApplicantsCount: number;
  };
};
export type applicantsQuery_ApplicantsQuery = {
  response: applicantsQuery_ApplicantsQuery$data;
  variables: applicantsQuery_ApplicantsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "search"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "skip"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "stage"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "take"
},
v4 = [
  {
    "kind": "Variable",
    "name": "search",
    "variableName": "search"
  },
  {
    "kind": "Variable",
    "name": "skip",
    "variableName": "skip"
  },
  {
    "kind": "Variable",
    "name": "stage",
    "variableName": "stage"
  },
  {
    "kind": "Variable",
    "name": "take",
    "variableName": "take"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalApplicantsCount",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "applicantsQuery_ApplicantsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "ApplicantsResponse",
        "kind": "LinkedField",
        "name": "applicants",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ApplicantRow",
            "kind": "LinkedField",
            "name": "applicants",
            "plural": true,
            "selections": [
              (v5/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ApplicantRow_applicant"
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "applicantsQuery_ApplicantsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "ApplicantsResponse",
        "kind": "LinkedField",
        "name": "applicants",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ApplicantRow",
            "kind": "LinkedField",
            "name": "applicants",
            "plural": true,
            "selections": [
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "email",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "stage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "position",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "appliedAt",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4fcbb5924377168fec74c8a61179069e",
    "id": null,
    "metadata": {},
    "name": "applicantsQuery_ApplicantsQuery",
    "operationKind": "query",
    "text": "query applicantsQuery_ApplicantsQuery(\n  $search: String\n  $stage: Stage\n  $skip: Int\n  $take: Int\n) {\n  applicants(search: $search, stage: $stage, skip: $skip, take: $take) {\n    applicants {\n      id\n      ...ApplicantRow_applicant\n    }\n    totalApplicantsCount\n  }\n}\n\nfragment ApplicantRow_applicant on ApplicantRow {\n  id\n  name\n  email\n  stage\n  position\n  appliedAt\n}\n"
  }
};
})();

(node as any).hash = "3c5fb15323083d7962aefde2e1ce160c";

export default node;
