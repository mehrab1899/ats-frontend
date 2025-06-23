/**
 * @generated SignedSource<<498f76989ae9326e9fd750112440c54a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type analyticsQueries_DashboardStatsQuery$variables = Record<PropertyKey, never>;
export type analyticsQueries_DashboardStatsQuery$data = {
  readonly dashboardStats: {
    readonly activeJobs: number;
    readonly shortlistedCount: number;
    readonly topJob: string;
    readonly totalApplicants: number;
  };
};
export type analyticsQueries_DashboardStatsQuery = {
  response: analyticsQueries_DashboardStatsQuery$data;
  variables: analyticsQueries_DashboardStatsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "DashboardStats",
    "kind": "LinkedField",
    "name": "dashboardStats",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "activeJobs",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalApplicants",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "topJob",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "shortlistedCount",
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
    "name": "analyticsQueries_DashboardStatsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "analyticsQueries_DashboardStatsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "097ebdd0fab72c83f980df68940186e7",
    "id": null,
    "metadata": {},
    "name": "analyticsQueries_DashboardStatsQuery",
    "operationKind": "query",
    "text": "query analyticsQueries_DashboardStatsQuery {\n  dashboardStats {\n    activeJobs\n    totalApplicants\n    topJob\n    shortlistedCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "ad56b79bcb2e4a4b83f187d1c32608c6";

export default node;
