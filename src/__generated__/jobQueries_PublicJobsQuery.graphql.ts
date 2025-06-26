/**
 * @generated SignedSource<<a04e65bb82cacd966c7ee35b207a6484>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type JobStatus = "CLOSED" | "DRAFT" | "OPEN" | "%future added value";
export type jobQueries_PublicJobsQuery$variables = Record<PropertyKey, never>;
export type jobQueries_PublicJobsQuery$data = {
  readonly publicJobs: ReadonlyArray<{
    readonly __typename: "PublicJob";
    readonly benefits: any;
    readonly context: string | null | undefined;
    readonly createdAt: string;
    readonly description: string;
    readonly id: string;
    readonly skillsRequired: any;
    readonly status: JobStatus;
    readonly title: string;
  }>;
};
export type jobQueries_PublicJobsQuery = {
  response: jobQueries_PublicJobsQuery$data;
  variables: jobQueries_PublicJobsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "PublicJob",
    "kind": "LinkedField",
    "name": "publicJobs",
    "plural": true,
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
        "name": "context",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "jobQueries_PublicJobsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "jobQueries_PublicJobsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "4f1fea239f997632590a5d3e2686f528",
    "id": null,
    "metadata": {},
    "name": "jobQueries_PublicJobsQuery",
    "operationKind": "query",
    "text": "query jobQueries_PublicJobsQuery {\n  publicJobs {\n    __typename\n    id\n    title\n    description\n    status\n    skillsRequired\n    benefits\n    createdAt\n    context\n  }\n}\n"
  }
};
})();

(node as any).hash = "cd57141d7d76b77a43792f2882b9d4f0";

export default node;
