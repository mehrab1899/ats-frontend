/**
 * @generated SignedSource<<4b79b755e50b4e0e929a05879f34f1a7>>
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
  readonly applicants: ReadonlyArray<{
    readonly appliedAt: string;
    readonly email: string;
    readonly id: string;
    readonly name: string;
    readonly position: string;
    readonly stage: Stage;
  }>;
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
    "cacheID": "b6b5da625cca7b546d410c3649aa6591",
    "id": null,
    "metadata": {},
    "name": "applicantsQuery_ApplicantsQuery",
    "operationKind": "query",
    "text": "query applicantsQuery_ApplicantsQuery(\n  $search: String\n  $stage: Stage\n  $skip: Int\n  $take: Int\n) {\n  applicants(search: $search, stage: $stage, skip: $skip, take: $take) {\n    id\n    name\n    email\n    stage\n    position\n    appliedAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "e30ac4697acdf347ba72648163f28c4b";

export default node;
