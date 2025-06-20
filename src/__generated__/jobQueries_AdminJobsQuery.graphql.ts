/**
 * @generated SignedSource<<33ae38d17a1ea25d3b379e8c352a3678>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type JobStatus = "CLOSED" | "DRAFT" | "OPEN" | "%future added value";
export type JobType = "CONTRACT" | "FULL_TIME" | "PART_TIME" | "%future added value";
export type jobQueries_AdminJobsQuery$variables = {
  search?: string | null | undefined;
  skip?: number | null | undefined;
  status?: JobStatus | null | undefined;
  take?: number | null | undefined;
};
export type jobQueries_AdminJobsQuery$data = {
  readonly jobs: ReadonlyArray<{
    readonly applicants: number;
    readonly createdAt: string;
    readonly description: string;
    readonly id: string;
    readonly status: JobStatus;
    readonly title: string;
    readonly type: JobType;
  }>;
};
export type jobQueries_AdminJobsQuery = {
  response: jobQueries_AdminJobsQuery$data;
  variables: jobQueries_AdminJobsQuery$variables;
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
  "name": "status"
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
        "name": "status",
        "variableName": "status"
      },
      {
        "kind": "Variable",
        "name": "take",
        "variableName": "take"
      }
    ],
    "concreteType": "AdminJob",
    "kind": "LinkedField",
    "name": "jobs",
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
        "name": "type",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "applicants",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "jobQueries_AdminJobsQuery",
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
    "name": "jobQueries_AdminJobsQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "616079ec17f48cebf144de4129022fd8",
    "id": null,
    "metadata": {},
    "name": "jobQueries_AdminJobsQuery",
    "operationKind": "query",
    "text": "query jobQueries_AdminJobsQuery(\n  $search: String\n  $status: JobStatus\n  $skip: Int\n  $take: Int\n) {\n  jobs(search: $search, status: $status, skip: $skip, take: $take) {\n    id\n    title\n    description\n    status\n    type\n    applicants\n    createdAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "1df0cb98d6b60b087ba6b9e32f5ad05a";

export default node;
