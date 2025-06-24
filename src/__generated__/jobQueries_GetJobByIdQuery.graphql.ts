/**
 * @generated SignedSource<<fd200113e1e0010e18edd783cef10d8c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type JobStatus = "CLOSED" | "DRAFT" | "OPEN" | "%future added value";
export type JobType = "CONTRACT" | "FULL_TIME" | "PART_TIME" | "%future added value";
export type jobQueries_GetJobByIdQuery$variables = {
  id: string;
};
export type jobQueries_GetJobByIdQuery$data = {
  readonly getJobById: {
    readonly __typename: "Job";
    readonly applicants: number;
    readonly benefits: any;
    readonly createdAt: string;
    readonly description: string;
    readonly id: string;
    readonly skillsRequired: any;
    readonly status: JobStatus;
    readonly title: string;
    readonly type: JobType;
  };
};
export type jobQueries_GetJobByIdQuery = {
  response: jobQueries_GetJobByIdQuery$data;
  variables: jobQueries_GetJobByIdQuery$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Job",
    "kind": "LinkedField",
    "name": "getJobById",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
      },
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
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "skillsRequired",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "benefits",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "applicants",
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
    "name": "jobQueries_GetJobByIdQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "jobQueries_GetJobByIdQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "389bf9868616365d6f2ded116158d72d",
    "id": null,
    "metadata": {},
    "name": "jobQueries_GetJobByIdQuery",
    "operationKind": "query",
    "text": "query jobQueries_GetJobByIdQuery(\n  $id: ID!\n) {\n  getJobById(id: $id) {\n    __typename\n    id\n    title\n    description\n    status\n    type\n    skillsRequired\n    benefits\n    createdAt\n    applicants\n  }\n}\n"
  }
};
})();

(node as any).hash = "090b22fa60ec0054149b21b46767092e";

export default node;
