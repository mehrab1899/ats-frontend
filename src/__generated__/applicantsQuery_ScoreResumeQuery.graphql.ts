/**
 * @generated SignedSource<<f7f9535886ab3777cd8a13cdd6d3c2cc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type applicantsQuery_ScoreResumeQuery$variables = {
  jobDescription: string;
  resumeUrl: string;
};
export type applicantsQuery_ScoreResumeQuery$data = {
  readonly scoreResume: {
    readonly category: string | null | undefined;
    readonly confidence: number | null | undefined;
    readonly explanation: string | null | undefined;
    readonly relevance_score: number | null | undefined;
  } | null | undefined;
};
export type applicantsQuery_ScoreResumeQuery = {
  response: applicantsQuery_ScoreResumeQuery$data;
  variables: applicantsQuery_ScoreResumeQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "jobDescription"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "resumeUrl"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "jobDescription",
        "variableName": "jobDescription"
      },
      {
        "kind": "Variable",
        "name": "resumeUrl",
        "variableName": "resumeUrl"
      }
    ],
    "concreteType": "ResumeScore",
    "kind": "LinkedField",
    "name": "scoreResume",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "category",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "confidence",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "relevance_score",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "explanation",
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
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "applicantsQuery_ScoreResumeQuery",
    "selections": (v2/*: any*/),
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
    "name": "applicantsQuery_ScoreResumeQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "acf12a105f31587a232149faaa468ef7",
    "id": null,
    "metadata": {},
    "name": "applicantsQuery_ScoreResumeQuery",
    "operationKind": "query",
    "text": "query applicantsQuery_ScoreResumeQuery(\n  $resumeUrl: String!\n  $jobDescription: String!\n) {\n  scoreResume(resumeUrl: $resumeUrl, jobDescription: $jobDescription) {\n    category\n    confidence\n    relevance_score\n    explanation\n  }\n}\n"
  }
};
})();

(node as any).hash = "2906ae6837b9207210aae2a675ac3990";

export default node;
