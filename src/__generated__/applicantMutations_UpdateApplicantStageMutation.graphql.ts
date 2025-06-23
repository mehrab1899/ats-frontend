/**
 * @generated SignedSource<<fcf990eb6f0d99ac545fd4d72d3e880c>>
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
    "cacheID": "d75733a18002516f3bc32517fbddacb6",
    "id": null,
    "metadata": {},
    "name": "applicantMutations_UpdateApplicantStageMutation",
    "operationKind": "mutation",
    "text": "mutation applicantMutations_UpdateApplicantStageMutation(\n  $id: String!\n  $stage: Stage!\n) {\n  updateApplicantStage(id: $id, stage: $stage) {\n    id\n    stage\n  }\n}\n"
  }
};
})();

(node as any).hash = "56a896917d5833bdf1e9743825221814";

export default node;
