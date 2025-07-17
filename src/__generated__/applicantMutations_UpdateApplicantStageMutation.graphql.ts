/**
 * @generated SignedSource<<7707321db2173333f72686d18efa6f2b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type Stage = "APPLIED" | "HIRED" | "INTERVIEWED" | "REJECTED" | "SHORTLISTED" | "%future added value";
export type applicantMutations_UpdateApplicantStageMutation$variables = {
  id: string;
  stage: Stage;
};
export type applicantMutations_UpdateApplicantStageMutation$data = {
  readonly updateApplicantStage: {
    readonly id: string;
    readonly stage: Stage;
  };
};
export type applicantMutations_UpdateApplicantStageMutation = {
  response: applicantMutations_UpdateApplicantStageMutation$data;
  variables: applicantMutations_UpdateApplicantStageMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "stage"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "stage",
        "variableName": "stage"
      }
    ],
    "concreteType": "Applicant",
    "kind": "LinkedField",
    "name": "updateApplicantStage",
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
        "name": "stage",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "applicantMutations_UpdateApplicantStageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "applicantMutations_UpdateApplicantStageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "756376e68633607de67a0efa95587de4",
    "id": null,
    "metadata": {},
    "name": "applicantMutations_UpdateApplicantStageMutation",
    "operationKind": "mutation",
    "text": "mutation applicantMutations_UpdateApplicantStageMutation(\n  $id: ID!\n  $stage: Stage!\n) {\n  updateApplicantStage(id: $id, stage: $stage) {\n    id\n    stage\n  }\n}\n"
  }
};
})();

(node as any).hash = "3cae4c5869ec67b52a9482ad3c2535b4";

export default node;
