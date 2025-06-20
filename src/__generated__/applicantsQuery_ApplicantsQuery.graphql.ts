/**
 * @generated SignedSource<<c70ff12ae6c18909e2c32737c681592d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
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
      readonly appliedAt: string;
      readonly email: string;
      readonly id: string;
      readonly name: string;
      readonly position: string;
      readonly stage: Stage;
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
    "alias": null,
    "args": [
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
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
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalApplicantsCount",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
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
    "selections": (v4/*: any*/),
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
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "501cb4d7a84a008f419a001b88e726df",
    "id": null,
    "metadata": {},
    "name": "applicantsQuery_ApplicantsQuery",
    "operationKind": "query",
    "text": "query applicantsQuery_ApplicantsQuery(\n  $search: String\n  $stage: Stage\n  $skip: Int\n  $take: Int\n) {\n  applicants(search: $search, stage: $stage, skip: $skip, take: $take) {\n    applicants {\n      id\n      name\n      email\n      stage\n      position\n      appliedAt\n    }\n    totalApplicantsCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "67f3f2cbe958e02337e7a9d96622347a";

export default node;
