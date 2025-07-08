/**
 * @generated SignedSource<<96e3a7584de414cd8c5e5127ab77ad80>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type JobStatus = "CLOSED" | "DRAFT" | "OPEN" | "%future added value";
export type jobMutations_UpdateJobStatusMutation$variables = {
  id: string;
  status: JobStatus;
};
export type jobMutations_UpdateJobStatusMutation$data = {
  readonly updateJobStatus: {
    readonly id: string;
    readonly status: JobStatus;
  };
};
export type jobMutations_UpdateJobStatusMutation = {
  response: jobMutations_UpdateJobStatusMutation$data;
  variables: jobMutations_UpdateJobStatusMutation$variables;
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
    "name": "status"
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
        "name": "status",
        "variableName": "status"
      }
    ],
    "concreteType": "Job",
    "kind": "LinkedField",
    "name": "updateJobStatus",
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
        "name": "status",
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
    "name": "jobMutations_UpdateJobStatusMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "jobMutations_UpdateJobStatusMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3c055ddfba8ccbb57e101791b935c45f",
    "id": null,
    "metadata": {},
    "name": "jobMutations_UpdateJobStatusMutation",
    "operationKind": "mutation",
    "text": "mutation jobMutations_UpdateJobStatusMutation(\n  $id: ID!\n  $status: JobStatus!\n) {\n  updateJobStatus(id: $id, status: $status) {\n    id\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "4835ff40ac908f34d5a3a113cc2b05ee";

export default node;
