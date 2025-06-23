/**
 * @generated SignedSource<<f5751943756e4fb597d1bcd547e9b903>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type analyticsQueries_MonthlyTrendsQuery$variables = Record<PropertyKey, never>;
export type analyticsQueries_MonthlyTrendsQuery$data = {
  readonly monthlyTrends: ReadonlyArray<{
    readonly applicants: number;
    readonly hired: number;
    readonly jobs: number;
    readonly month: string;
  }>;
};
export type analyticsQueries_MonthlyTrendsQuery = {
  response: analyticsQueries_MonthlyTrendsQuery$data;
  variables: analyticsQueries_MonthlyTrendsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "MonthlyStats",
    "kind": "LinkedField",
    "name": "monthlyTrends",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "month",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "jobs",
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
        "name": "hired",
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
    "name": "analyticsQueries_MonthlyTrendsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "analyticsQueries_MonthlyTrendsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "75f2adabe2cadb7cfb2c4a0adfcfb091",
    "id": null,
    "metadata": {},
    "name": "analyticsQueries_MonthlyTrendsQuery",
    "operationKind": "query",
    "text": "query analyticsQueries_MonthlyTrendsQuery {\n  monthlyTrends {\n    month\n    jobs\n    applicants\n    hired\n  }\n}\n"
  }
};
})();

(node as any).hash = "f798a00c8ef31c55e5256fafbb8f9424";

export default node;
