/**
 * @generated SignedSource<<f8adfe76e9056e52b05aaa5147667282>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Stage = "APPLIED" | "HIRED" | "INTERVIEWED" | "REJECTED" | "SHORTLISTED" | "%future added value";
export type useApplicantsFragmentPaginationQuery$variables = {
  search?: string | null | undefined;
  stage?: Stage | null | undefined;
};
export type useApplicantsFragmentPaginationQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ApplicantsConnection_viewer">;
};
export type useApplicantsFragmentPaginationQuery = {
  response: useApplicantsFragmentPaginationQuery$data;
  variables: useApplicantsFragmentPaginationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "search"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "stage"
  }
],
v1 = {
  "kind": "Variable",
  "name": "search",
  "variableName": "search"
},
v2 = {
  "kind": "Variable",
  "name": "stage",
  "variableName": "stage"
},
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  (v1/*: any*/),
  (v2/*: any*/)
],
v4 = {
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
    "name": "useApplicantsFragmentPaginationQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "ApplicantsConnection_viewer"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useApplicantsFragmentPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "ApplicantConnection",
        "kind": "LinkedField",
        "name": "applicants",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ApplicantEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ApplicantRow",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
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
                    "concreteType": "JobRef",
                    "kind": "LinkedField",
                    "name": "job",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
                      (v4/*: any*/)
                    ],
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "filters": [
          "search",
          "stage"
        ],
        "handle": "connection",
        "key": "ApplicantsConnection_applicants",
        "kind": "LinkedHandle",
        "name": "applicants"
      }
    ]
  },
  "params": {
    "cacheID": "8070280b17dfacb4e24d38b4a096c528",
    "id": null,
    "metadata": {},
    "name": "useApplicantsFragmentPaginationQuery",
    "operationKind": "query",
    "text": "query useApplicantsFragmentPaginationQuery(\n  $search: String\n  $stage: Stage\n) {\n  ...ApplicantsConnection_viewer_3C5iak\n}\n\nfragment ApplicantRow_applicant on ApplicantRow {\n  id\n  firstName\n  lastName\n  email\n  stage\n  appliedAt\n  job {\n    title\n    id\n  }\n}\n\nfragment ApplicantsConnection_viewer_3C5iak on Query {\n  applicants(search: $search, stage: $stage, first: 10) {\n    edges {\n      node {\n        id\n        ...ApplicantRow_applicant\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "dff21ba5bb726b9b961a8a36bb00cc23";

export default node;
