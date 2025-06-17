/**
 * @generated SignedSource<<ebd296d93311bed03139c1e6c2f11edc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type JobStatus = "CLOSED" | "DRAFT" | "OPEN" | "%future added value";
export type jobQueries_JobsQuery$variables = Record<PropertyKey, never>;
export type jobQueries_JobsQuery$data = {
  readonly jobs: ReadonlyArray<{
    readonly applicantCount: number;
    readonly benefits: any;
    readonly createdAt: string;
    readonly description: string;
    readonly id: string;
    readonly skillsRequired: any;
    readonly status: JobStatus;
    readonly title: string;
  }>;
};
export type jobQueries_JobsQuery = {
  response: jobQueries_JobsQuery$data;
  variables: jobQueries_JobsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Job",
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
        "name": "applicantCount",
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
    "name": "jobQueries_JobsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "jobQueries_JobsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "510ee54c72637fa596946b555322d523",
    "id": null,
    "metadata": {},
    "name": "jobQueries_JobsQuery",
    "operationKind": "query",
    "text": "query jobQueries_JobsQuery {\n  jobs {\n    id\n    title\n    description\n    status\n    skillsRequired\n    benefits\n    createdAt\n    applicantCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "8ba132ce925ff2de5c3c6424cee502b7";

export default node;
