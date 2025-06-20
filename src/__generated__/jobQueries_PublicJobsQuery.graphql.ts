/**
 * @generated SignedSource<<aa4bcde562c5f2f60208f3c2fde45cd7>>
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
    readonly benefits: any;
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
    "cacheID": "edced4ec5fa220af812cd8824ae96bcd",
    "id": null,
    "metadata": {},
    "name": "jobQueries_PublicJobsQuery",
    "operationKind": "query",
    "text": "query jobQueries_PublicJobsQuery {\n  publicJobs {\n    id\n    title\n    description\n    status\n    skillsRequired\n    benefits\n    createdAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "93c319c0d60a84da89260f95f3fdc72c";

export default node;
