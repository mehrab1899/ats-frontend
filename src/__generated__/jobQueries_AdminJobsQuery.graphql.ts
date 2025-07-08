/**
 * @generated SignedSource<<269dff1acb3360631f54fda8ddf436eb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JobStatus = "CLOSED" | "DRAFT" | "OPEN" | "%future added value";
export type jobQueries_AdminJobsQuery$variables = {
  search?: string | null | undefined;
  skip?: number | null | undefined;
  status?: JobStatus | null | undefined;
  take?: number | null | undefined;
};
export type jobQueries_AdminJobsQuery$data = {
  readonly jobs: {
    readonly jobs: ReadonlyArray<{
      readonly __typename: "Job";
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"AdminJobRow_job">;
    }>;
    readonly totalJobsCount: number;
  };
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
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalJobsCount",
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
    "name": "jobQueries_AdminJobsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "JobsResponse",
        "kind": "LinkedField",
        "name": "jobs",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Job",
            "kind": "LinkedField",
            "name": "jobs",
            "plural": true,
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "AdminJobRow_job"
              }
            ],
            "storageKey": null
          },
          (v7/*: any*/)
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
    "name": "jobQueries_AdminJobsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "JobsResponse",
        "kind": "LinkedField",
        "name": "jobs",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Job",
            "kind": "LinkedField",
            "name": "jobs",
            "plural": true,
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/),
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
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d412a2c9814d89e1ef4e4eb703e751f8",
    "id": null,
    "metadata": {},
    "name": "jobQueries_AdminJobsQuery",
    "operationKind": "query",
    "text": "query jobQueries_AdminJobsQuery(\n  $search: String\n  $status: JobStatus\n  $skip: Int\n  $take: Int\n) {\n  jobs(search: $search, status: $status, skip: $skip, take: $take) {\n    jobs {\n      __typename\n      id\n      ...AdminJobRow_job\n    }\n    totalJobsCount\n  }\n}\n\nfragment AdminJobRow_job on Job {\n  id\n  title\n  description\n  status\n  type\n  applicants\n  createdAt\n}\n"
  }
};
})();

(node as any).hash = "7742fc3a638734066631cedbec790334";

export default node;
