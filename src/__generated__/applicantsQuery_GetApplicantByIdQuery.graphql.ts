/**
 * @generated SignedSource<<ab73de0e23e8bdb4fac62f4e607c03bc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type Stage = "APPLIED" | "HIRED" | "INTERVIEWED" | "REJECTED" | "SHORTLISTED" | "%future added value";
export type applicantsQuery_GetApplicantByIdQuery$variables = {
  id: string;
};
export type applicantsQuery_GetApplicantByIdQuery$data = {
  readonly getApplicantById: {
    readonly appliedAt: string;
    readonly coverLetter: string;
    readonly cv: string;
    readonly email: string;
    readonly firstName: string;
    readonly id: string;
    readonly job: {
      readonly id: string;
      readonly title: string;
    };
    readonly lastName: string;
    readonly message: string | null | undefined;
    readonly phone: string;
    readonly stage: Stage;
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Applicant",
    "kind": "LinkedField",
    "name": "getApplicantById",
    "plural": false,
    "selections": [
      (v1/*: any*/),
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
        "concreteType": "JobRef",
        "kind": "LinkedField",
        "name": "job",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          }
        ],
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
        "kind": "ScalarField",
        "name": "message",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "applicantsQuery_GetApplicantByIdQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "applicantsQuery_GetApplicantByIdQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "a2089bdd3258303096a18381d13795ac",
    "id": null,
    "metadata": {},
    "name": "applicantsQuery_GetApplicantByIdQuery",
    "operationKind": "query",
    "text": "query applicantsQuery_GetApplicantByIdQuery(\n  $id: ID!\n) {\n  getApplicantById(id: $id) {\n    id\n    firstName\n    lastName\n    email\n    phone\n    stage\n    job {\n      id\n      title\n    }\n    cv\n    coverLetter\n    message\n    appliedAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "4105f76db3430074a1e8507684bcc588";

export default node;
