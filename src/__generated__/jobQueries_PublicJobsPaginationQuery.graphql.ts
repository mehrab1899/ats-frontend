/**
 * @generated SignedSource<<f0e9a122c29a4f29a3567d76c20b8d6b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type jobQueries_PublicJobsPaginationQuery$variables = {
  after?: string | null | undefined;
  first: number;
};
export type jobQueries_PublicJobsPaginationQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"usePaginatedPublicJobsPaginationFragment">;
};
export type jobQueries_PublicJobsPaginationQuery = {
  response: jobQueries_PublicJobsPaginationQuery$data;
  variables: jobQueries_PublicJobsPaginationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "jobQueries_PublicJobsPaginationQuery",
    "selections": [
      {
        "args": (v2/*: any*/),
        "kind": "FragmentSpread",
        "name": "usePaginatedPublicJobsPaginationFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "jobQueries_PublicJobsPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "JobConnection",
        "kind": "LinkedField",
        "name": "publicJobs",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "JobEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Job",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
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
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "PublicJobs_publicJobs",
        "kind": "LinkedHandle",
        "name": "publicJobs"
      }
    ]
  },
  "params": {
    "cacheID": "021b8452c301040fdde7a7dcd0b19b3d",
    "id": null,
    "metadata": {},
    "name": "jobQueries_PublicJobsPaginationQuery",
    "operationKind": "query",
    "text": "query jobQueries_PublicJobsPaginationQuery(\n  $first: Int!\n  $after: String\n) {\n  ...usePaginatedPublicJobsPaginationFragment_2HEEH6\n}\n\nfragment JobCard_job on Job {\n  id\n  title\n  description\n}\n\nfragment usePaginatedPublicJobsPaginationFragment_2HEEH6 on Query {\n  publicJobs(first: $first, after: $after) {\n    edges {\n      node {\n        id\n        ...JobCard_job\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2ea22b0128d4cde10a29d4a5b9861098";

export default node;
