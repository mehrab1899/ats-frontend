/**
 * @generated SignedSource<<f6a7b092f6762c2e77245e7d1cf3a81a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PublicJobsPaginationFragmentRefetch$variables = {
  after?: string | null | undefined;
  first?: number | null | undefined;
};
export type PublicJobsPaginationFragmentRefetch$data = {
  readonly " $fragmentSpreads": FragmentRefs<"usePaginatedPublicJobsPaginationFragment">;
};
export type PublicJobsPaginationFragmentRefetch = {
  response: PublicJobsPaginationFragmentRefetch$data;
  variables: PublicJobsPaginationFragmentRefetch$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": 6,
    "kind": "LocalArgument",
    "name": "first"
  }
],
v1 = [
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PublicJobsPaginationFragmentRefetch",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "usePaginatedPublicJobsPaginationFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PublicJobsPaginationFragmentRefetch",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "PublicJobs_publicJobs",
        "kind": "LinkedHandle",
        "name": "publicJobs"
      }
    ]
  },
  "params": {
    "cacheID": "a434646f1d7b13cc4a0ee3c7ee494423",
    "id": null,
    "metadata": {},
    "name": "PublicJobsPaginationFragmentRefetch",
    "operationKind": "query",
    "text": "query PublicJobsPaginationFragmentRefetch(\n  $after: String\n  $first: Int = 6\n) {\n  ...usePaginatedPublicJobsPaginationFragment_2HEEH6\n}\n\nfragment JobCard_job on Job {\n  id\n  title\n  description\n}\n\nfragment usePaginatedPublicJobsPaginationFragment_2HEEH6 on Query {\n  publicJobs(first: $first, after: $after) {\n    edges {\n      node {\n        id\n        ...JobCard_job\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d0a7ea183834cf76480b68946004c9e3";

export default node;
