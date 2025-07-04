/**
 * @generated SignedSource<<250bda30c73af42e8fddda662302b483>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type applicantsQuery_GetApplicantByIdQuery$variables = {
  id: string;
};
export type applicantsQuery_GetApplicantByIdQuery$data = {
  readonly getApplicantById: {
    readonly " $fragmentSpreads": FragmentRefs<"ApplicantDetail_applicant">;
  };
};
export type applicantsQuery_GetApplicantByIdQuery = {
  response: applicantsQuery_GetApplicantByIdQuery$data;
  variables: applicantsQuery_GetApplicantByIdQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "applicantsQuery_GetApplicantByIdQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Applicant",
        "kind": "LinkedField",
        "name": "getApplicantById",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ApplicantDetail_applicant"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "applicantsQuery_GetApplicantByIdQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Applicant",
        "kind": "LinkedField",
        "name": "getApplicantById",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "firstName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastName",
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
            "name": "phone",
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
            "name": "appliedAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "message",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cv",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "coverLetter",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "JobRef",
            "kind": "LinkedField",
            "name": "job",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ce52362a7bfe2043cef6e72d7b0000d9",
    "id": null,
    "metadata": {},
    "name": "applicantsQuery_GetApplicantByIdQuery",
    "operationKind": "query",
    "text": "query applicantsQuery_GetApplicantByIdQuery(\n  $id: ID!\n) {\n  getApplicantById(id: $id) {\n    ...ApplicantDetail_applicant\n    id\n  }\n}\n\nfragment ApplicantDetail_applicant on Applicant {\n  id\n  firstName\n  lastName\n  email\n  phone\n  stage\n  appliedAt\n  message\n  cv\n  coverLetter\n  job {\n    id\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "a2b4214bf328ecf9a4a2f0b133c8a1f8";

export default node;
